# Setup Checklist

Run through this in order. Items marked **YOU** require account access, API keys, OAuth login, real destination IDs, or production webhook registration.

---

## Step 1 — Infrastructure

- [ ] Docker installed and running.
- [ ] `.env` created from `.env.example`.
- [ ] `N8N_ENCRYPTION_KEY` set to a long stable random string.
- [ ] `POSTGRES_PASSWORD` changed from the example value.
- [ ] `WEBHOOK_URL` set to the public HTTPS URL for production webhook registrations.
- [ ] n8n stack started with `docker compose up -d postgres n8n qdrant redis`.
- [ ] n8n owner account created.
- [ ] All workflows imported with `npm run import:workflows`.

Reference: [docs/LIVE_DEPLOYMENT.md](docs/LIVE_DEPLOYMENT.md).

---

## Step 1.5 — Readiness Report

Run:

```bash
npm run readiness
```

Open [docs/LIVE_READINESS_REPORT.md](docs/LIVE_READINESS_REPORT.md). It is generated from the workflow JSON and lists each workflow's:

- Trigger or manual/upstream requirement
- Credential and service groups
- Placeholder values
- Direct environment variables
- External webhook registrations
- Activation blockers

Each workflow also has a **Live Deployment Checklist** sticky note inside the n8n canvas after import.

---

## Step 2 — Credentials  **YOU**

I cannot add these for you — they require your account logins / API keys. In n8n: **Settings → Credentials → New**.

Add the ones for the workflows you actually plan to run first, not every credential in the repo:

| Credential | Where to get it | Needed by |
|---|---|---|
| **OpenAI API** | platform.openai.com → API Keys | All 36 |
| **Gmail OAuth2** | n8n guides you through Google OAuth | GTM 02, 05, 09 · SMB AI 02, 03 |
| **Google Sheets/Drive OAuth2** | Same Google OAuth flow | GTM 01, 02 · SMB AI 03, 06 |
| **Slack OAuth2** | api.slack.com → Create App | GTM 04, 07, 10 · SMB AI 03, 04, 05, 08, 10 |
| **HubSpot OAuth2** | HubSpot → Settings → Integrations → Private Apps | GTM 04, 05, 08, 10 |
| **Notion API** | notion.so/my-integrations | GTM 03, 06, 10 · SMB AI 04, 09 |
| **Zendesk API** | Zendesk admin → API → Token | SMB AI 05, 09 |
| **Telegram Bot** | @BotFather on Telegram | GTM 03 |
| **Qdrant** | Qdrant Cloud or self-hosted URL + key | SMB AI 01 |
| **Redis** | Local or cloud Redis URL | SMB AI 10 |
| **Linear / Jira** | Linear and Atlassian app settings | Product Manager workflows |
| **Amplitude / Mixpanel** | Product analytics workspace API keys | Product Manager workflows |
| **GrowthBook** | GrowthBook API key | PM 08 |
| **Apollo / enrichment API** | Vendor dashboard API key | GTM 11 |
| **GA4 / LinkedIn Ads / retargeting API** | Analytics and ads admin consoles | GTM 12 |

**Recommendation:** start with OpenAI + Slack + Gmail. Those 3 unlock the easiest email, support, and GTM workflows before you wire the heavier CRM, analytics, and vector-store flows.

---

## Step 3 — Placeholders  **YOU**

For each workflow you want to activate, open the listed node and replace the placeholder:

### GTM Team
- **01 ICP Lead Scraper** → `Append to Sheet` node → `YOUR_SHEET_ID` (Google Sheet ID from its URL)
- **02 AI Cold Email Personalizer** → `Read Leads Sheet` + `Mark Sent` → `YOUR_SHEET_ID`
- **03 LinkedIn Founder Content Agent** → `Queue Draft (Notion)` → `YOUR_DB_ID` (Notion database ID)
- **04 Inbound Lead Qualifier** → `Slack Alert AE` → `#sales-hot` (rename to your channel)
- **05 AI SDR Follow-Up Sequencer** → no placeholders, just credentials
- **06 Content Repurposing** → `YouTube RSS` → `YOUR_CHANNEL_ID` · `Queue to Notion` → `YOUR_DB`
- **07 Competitor Monitor** → `Slack Post` → `#competitive-intel` · RSS URL in `Competitor RSS` node
- **08 AI Meeting Notes → CRM** → no placeholders
- **09 Demo Request Pre-Call Brief** → no placeholders (uses Calendly payload)
- **10 Pipeline Health Reporter** → `Slack #leadership` → `#leadership` · `Archive Notion` → `YOUR_DB`
- **11 End-to-End Outbound Engine** → `Log to Sheet (Hot)` + `Warm Nurture Sheet` → `YOUR_SHEET_ID` · `Slack AE Reply!` → `#sales-hot`
- **12 Account-Based Intent Engine** → `GA4 Page Visits` → `YOUR_GA_PROP` · `Queue Email Touch` / `Queue LinkedIn DM` → `YOUR_SHEET_ID` · `Trigger Retarget Ad` → `YOUR_AD_ACCT` · `Slack Hot Accounts` → `#abm`
- **13 RevOps Forecast Pipeline** → `Slack #exec` → `#exec` · `Archive Notion` → `YOUR_FORECAST_DB`

### AI Enablement for SMBs
- **01 Internal RAG QA Bot** → no placeholders (configure Qdrant collection name `company_docs`)
- **02 Email Triage Drafts** → no placeholders
- **03 Invoice OCR** → `Review Queue (Sheet)` → `YOUR_SHEET` · `Slack Finance` → `#finance`
- **04 Meeting Action Items** → `Create Notion Task` → `YOUR_TASKS_DB` · `Slack Summary` → `#meetings`
- **05 Support Ticket Tagger** → `Slack Churn Risk` → `#cs-escalations`
- **06 PDF Contract Summarizer** → `Drive New File` → `YOUR_CONTRACTS_FOLDER` · `Save Summary` → `YOUR_SUMMARIES_FOLDER`
- **07 HR Resume Screener** → no placeholders (Greenhouse webhook URL is generated by n8n)
- **08 Daily Standup Aggregator** → `GitHub Commits` → `YOUR_ORG` + `YOUR_REPO` · `Post #standup` → `#standup`
- **09 KB Auto-Updater** → `Draft to Notion` → `YOUR_KB_DB`
- **10 Error Log Summarizer** → `Slack #errors` → `#errors`
- **11 Full-Stack Support Copilot** → `Escalate to Human` → `#support-escalations` · `Log to Analytics Sheet` → `YOUR_SHEET`
- **12 Document Intelligence Hub** → `Drive New File` → `YOUR_INBOX_FOLDER` · Notion/Sheets nodes → `YOUR_INBOX_DB`, `YOUR_LEGAL_DB`, `YOUR_AP_SHEET`, `YOUR_ATS_DB` · `Slack Notify Team` → `#docs`
- **13 Multi-Source Knowledge Sync** → `Post #knowledge` → `#knowledge` · `Archive Notion` → `YOUR_KNOWLEDGE_DB`

### Product Manager
- **01 Feedback Triage Hub** → feedback source credentials + Qdrant collection + Linear destination
- **02 Interview Synthesis Engine** → Zoom/Otter source + Qdrant collection + Notion archive
- **03 PRD Draft Generator** → Slack slash command + Qdrant PRD collection + Notion PRD database
- **04 Spec to Linear Tickets Splitter** → Notion approved specs + Linear/Jira destinations
- **05 RICE Auto-Scorer** → feedback, ticket, and revenue sources used as evidence
- **06 Stakeholder Roadmap Digest** → audience-specific Slack channels and Notion archive
- **07 Product Anomaly Watcher** → Amplitude/Mixpanel workspace IDs and Slack product channel
- **08 Experiment Result Auto-Writer** → GrowthBook project + Linear follow-up destination
- **09 Release Notes Auto-Generator** → release source, customer/internal Slack channels, Notion archive
- **10 Sprint Retro Bot** → metrics source, Slack sentiment source, retro doc destination

---

## Step 4 — External webhook URLs  **YOU**

Workflows with Webhook triggers expose URLs that you must register in the source system. After you Save the workflow in n8n, the webhook node shows two URLs (Test + Production). Use **Production**.

| Workflow | Where to paste the webhook URL |
|---|---|
| GTM 04 Inbound Qualifier | Typeform → Connect → Webhooks |
| GTM 05 SDR Follow-Up | HubSpot Workflow → Trigger → POST URL |
| GTM 08 Meeting Notes | Fireflies → Integrations → Webhooks |
| GTM 09 Pre-Call Brief | Calendly → Integrations → Webhooks |
| SMB AI 04 Meeting Action Items | Otter → Integrations → Webhooks |
| SMB AI 05 Ticket Tagger | Zendesk → Admin → Webhooks → Triggers |
| SMB AI 07 Resume Screener | Greenhouse → Configure → Webhooks |
| SMB AI 10 Error Logs | Sentry → Settings → Integrations → Webhooks |

---

## Step 5 — Test one workflow end-to-end  **YOU + verify**

Pick the easiest first (suggested: **SMB AI 02 Email Triage** — only needs OpenAI + Gmail).

1. Open the workflow in n8n.
2. Click each node → confirm credentials selected.
3. Click **Execute Workflow** at the bottom.
4. Watch each node turn green; click a node to inspect its output JSON.
5. If green end-to-end → toggle **Active** in the top right.

Send yourself a test email → within 60 seconds a Gmail draft should appear.

---

## Step 6 — Production Activation Guardrail

Before toggling **Active** on any workflow:

- [ ] Every node has a credential selected or a deliberate unauthenticated mode.
- [ ] Every `YOUR_*`, `yourco`, and `#channel` placeholder is replaced.
- [ ] Every direct env var listed in the sticky note is set in the runtime environment.
- [ ] Every webhook trigger has its production URL registered in the source system.
- [ ] One full test execution reaches the final node successfully.
- [ ] Draft/send behavior is reviewed by the business owner.
- [ ] Rate limits and suppression rules are reviewed for outbound/customer-facing workflows.

Run `npm run readiness:strict` from the configured production shell as the last automated check. It should fail until placeholders, env vars, webhook setup, and manual-trigger gaps have been handled.

---

## Why Steps 2–4 Stay Manual

Real OAuth tokens, account IDs, channel names, and external-system webhook registrations require account-owner access. Keep those values out of git and configure them directly in the target n8n instance or deployment environment.
