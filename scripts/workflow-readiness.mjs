import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const args = new Set(process.argv.slice(2));
const writeReport = args.has("--write");
const addNotes = args.has("--add-notes");
const strict = args.has("--strict");

const workflowDirs = ["GTM Team", "AI Enablement for SMBs", "Product Manager"];
const placeholderPattern =
  /\b(?:YOUR|TODO|TBD|CHANGE_ME|EXAMPLE)[A-Z0-9_-]*\b|\byourco\b|#[a-z0-9][a-z0-9_-]*/g;
const envPattern = /\$env\.([A-Z0-9_]+)/g;

const serviceHints = [
  ["@n8n/n8n-nodes-langchain.openai", "OpenAI"],
  ["@n8n/n8n-nodes-langchain.embeddingsopenai", "OpenAI embeddings"],
  ["@n8n/n8n-nodes-langchain.vectorstoreqdrant", "Qdrant"],
  ["n8n-nodes-base.gmail", "Gmail OAuth"],
  ["n8n-nodes-base.gmailtrigger", "Gmail OAuth"],
  ["n8n-nodes-base.slack", "Slack OAuth"],
  ["n8n-nodes-base.hubspot", "HubSpot"],
  ["n8n-nodes-base.notion", "Notion"],
  ["n8n-nodes-base.googlesheets", "Google Sheets"],
  ["n8n-nodes-base.googledrive", "Google Drive"],
  ["n8n-nodes-base.googledrivetrigger", "Google Drive"],
  ["n8n-nodes-base.telegram", "Telegram bot"],
  ["n8n-nodes-base.telegramtrigger", "Telegram bot"],
  ["n8n-nodes-base.zendesk", "Zendesk"],
  ["n8n-nodes-base.redis", "Redis"],
];

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    if (entry.isFile() && entry.name.endsWith(".json")) out.push(full);
  }
  return out;
}

function unique(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function analyze(file) {
  const text = fs.readFileSync(file, "utf8");
  const json = JSON.parse(text);
  const nodes = json.nodes || [];
  const automationNodes = nodes.filter((node) => node.type !== "n8n-nodes-base.stickyNote");
  const rel = path.relative(root, file);
  const placeholders = unique((text.match(placeholderPattern) || []).map((v) => v.trim()));
  const envVars = unique([...text.matchAll(envPattern)].map((m) => m[1]));
  const triggers = unique(
    automationNodes
      .filter((node) => /trigger|webhook|cron|schedule/i.test(`${node.type} ${node.name}`))
      .map((node) => node.name),
  );
  const aiNodes = unique(
    automationNodes
      .filter((node) => /openai|qdrant|embedding|whisper|gpt/i.test(`${node.type} ${node.name}`))
      .map((node) => node.name),
  );
  const routingNodes = unique(
    automationNodes
      .filter((node) => /if|switch|wait|merge|filter|aggregate/i.test(`${node.type} ${node.name}`))
      .map((node) => node.name),
  );
  const services = unique(
    automationNodes.flatMap((node) => {
      const type = String(node.type || "").toLowerCase();
      const direct = serviceHints.filter(([needle]) => type.includes(needle)).map(([, label]) => label);
      const url = JSON.stringify(node.parameters || {});
      if (/apollo/i.test(url)) direct.push("Apollo API");
      if (/clearbit/i.test(url)) direct.push("Clearbit or enrichment API");
      if (/linear/i.test(url)) direct.push("Linear API");
      if (/jira|atlassian/i.test(url)) direct.push("Jira API");
      if (/amplitude/i.test(url)) direct.push("Amplitude API");
      if (/mixpanel/i.test(url)) direct.push("Mixpanel API");
      if (/growthbook|statsig/i.test(url)) direct.push("GrowthBook or Statsig API");
      if (/mailchimp/i.test(url)) direct.push("Mailchimp");
      if (/calendly/i.test(url)) direct.push("Calendly webhook");
      if (/fireflies|otter|zoom/i.test(url)) direct.push("Meeting transcript provider");
      return direct;
    }),
  );
  const webhookNodes = automationNodes.filter((node) => String(node.type || "").includes("webhook")).map((node) => node.name);
  const blockers = [];
  if (placeholders.length) blockers.push(`${placeholders.length} placeholder value(s)`);
  if (envVars.length) blockers.push(`${envVars.length} environment variable(s)`);
  if (services.length) blockers.push(`${services.length} credential/service group(s)`);
  if (webhookNodes.length) blockers.push(`${webhookNodes.length} external webhook registration(s)`);
  if (!triggers.length) blockers.push("manual trigger or upstream workflow call required");

  return {
    file,
    rel,
    name: json.name || path.basename(file, ".json"),
    active: Boolean(json.active),
    nodeCount: automationNodes.length,
    triggers,
    aiNodes,
    routingNodes,
    services,
    placeholders,
    envVars,
    webhookNodes,
    blockers,
  };
}

function noteContent(item) {
  return [
    "## Live deployment checklist",
    "",
    `Workflow: ${item.name}`,
    `Nodes: ${item.nodeCount}`,
    `Trigger: ${item.triggers.join(", ") || "Manual/upstream call required"}`,
    `Credentials/services: ${item.services.join(", ") || "None detected from node types"}`,
    `Placeholders: ${item.placeholders.join(", ") || "None detected"}`,
    `Environment variables: ${item.envVars.join(", ") || "None detected"}`,
    item.webhookNodes.length
      ? `External webhook setup: register production URL for ${item.webhookNodes.join(", ")}`
      : "External webhook setup: not required",
    "",
    "Before activating:",
    "1. Configure every credential in n8n Credentials.",
    "2. Replace every placeholder above with live IDs, channels, folders, or database IDs.",
    "3. Execute once with test data and inspect every node output.",
    "4. Activate only after the workflow reaches its final node successfully.",
  ].join("\n");
}

function stickyId(rel) {
  return `live-${crypto.createHash("sha1").update(rel).digest("hex").slice(0, 24)}`;
}

function upsertStickyNote(item) {
  const json = JSON.parse(fs.readFileSync(item.file, "utf8"));
  json.nodes ||= [];
  const existing = json.nodes.find((node) => node.name === "Live Deployment Checklist");
  const note = {
    parameters: {
      content: noteContent(item),
      height: 440,
      width: 520,
      color: 4,
    },
    id: stickyId(item.rel),
    name: "Live Deployment Checklist",
    type: "n8n-nodes-base.stickyNote",
    typeVersion: 1,
    position: [80, -140],
  };
  if (existing) {
    Object.assign(existing, note);
  } else {
    json.nodes.unshift(note);
  }
  fs.writeFileSync(item.file, `${JSON.stringify(json, null, 2)}\n`);
}

function report(items) {
  const generatedAt = new Date().toISOString();
  const lines = [
    "# Live Readiness Report",
    "",
    `Generated: ${generatedAt}`,
    "",
    "This report is generated from the workflow JSON files. A workflow is live-ready only after credentials, placeholders, environment variables, and webhook registrations are configured in the target n8n instance.",
    "",
    "## Summary",
    "",
    `- Workflows scanned: ${items.length}`,
    `- Workflows with unresolved placeholders: ${items.filter((item) => item.placeholders.length).length}`,
    `- Workflows with direct environment variables: ${items.filter((item) => item.envVars.length).length}`,
    `- Workflows with webhook nodes: ${items.filter((item) => item.webhookNodes.length).length}`,
    `- Workflows without a trigger: ${items.filter((item) => !item.triggers.length).length}`,
    "",
    "## Workflow Matrix",
    "",
    "| Workflow | Trigger | Credentials/services | Placeholders | Env vars | Webhooks | Activation blockers |",
    "|---|---|---|---|---|---|---|",
  ];

  for (const item of items) {
    lines.push(
      `| ${item.rel.replace(/\.json$/, "")} | ${item.triggers.join("<br>") || "Manual/upstream"} | ${item.services.join("<br>") || "-"} | ${item.placeholders.join("<br>") || "-"} | ${item.envVars.join("<br>") || "-"} | ${item.webhookNodes.join("<br>") || "-"} | ${item.blockers.join("<br>") || "Ready for test execution"} |`,
    );
  }

  lines.push(
    "",
    "## Live Activation Rule",
    "",
    "Do not activate a workflow directly after import. Configure credentials and replacements, run one execution with representative test data, confirm the final node succeeds, then toggle Active.",
    "",
    "## Fastest Safe Rollout",
    "",
    "1. SMB AI 02 Email Triage + Draft Replies: OpenAI + Gmail only, drafts instead of sends.",
    "2. SMB AI 04 Meeting Transcription Action Items: transcript webhook + Notion/Slack, no customer-facing output.",
    "3. GTM 04 Inbound Lead Qualifier: form webhook + enrichment + HubSpot/Slack, clear revenue KPI.",
    "4. Product Manager 03 PRD Draft Generator: Slack command + Notion + Qdrant, draft-only output.",
  );
  return `${lines.join("\n")}\n`;
}

const files = workflowDirs.flatMap((dir) => {
  const full = path.join(root, dir);
  return fs.existsSync(full) ? walk(full) : [];
});

const items = files.sort().map(analyze);

if (addNotes) {
  for (const item of items) upsertStickyNote(item);
}

if (writeReport) {
  fs.mkdirSync(path.join(root, "docs"), { recursive: true });
  fs.writeFileSync(path.join(root, "docs", "LIVE_READINESS_REPORT.md"), report(items));
}

const summary = {
  workflows: items.length,
  withPlaceholders: items.filter((item) => item.placeholders.length).length,
  withEnvVars: items.filter((item) => item.envVars.length).length,
  withWebhooks: items.filter((item) => item.webhookNodes.length).length,
  withoutTriggers: items.filter((item) => !item.triggers.length).length,
};

console.log(JSON.stringify(summary, null, 2));

if (strict) {
  const blocking = items.filter(
    (item) =>
      item.placeholders.length ||
      item.envVars.some((envVar) => !process.env[envVar]) ||
      item.webhookNodes.length ||
      !item.triggers.length,
  );
  if (blocking.length) {
    console.error("Strict readiness failed:");
    for (const item of blocking) console.error(`- ${item.rel}: ${item.blockers.join(", ")}`);
    process.exit(1);
  }
}
