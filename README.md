# AI Automations - n8n

36 production-grade n8n workflows for AI startup go-to-market and first-time AI adopters. Hand-built, not aggregated.

## Structure

- `GTM Team/` — 13 workflows for AI startup go-to-market (pipeline, outbound, content, revenue).
- `First-Time AI Company/` — 13 workflows for organizations adopting AI for the first time (safe, internal, high-ROI).
- `Product Manager/` — 10 complex workflows for the PM operating system (feedback, PRDs, roadmap, experiments, retros).

Each automation ships with two files:
- `NN-Name.md` — what it does, stack, setup notes.
- `NN-Name.json` — importable n8n workflow.

## Workflow index

### GTM Team

| # | Workflow | Nodes |
|---|---|---|
| 01 | ICP Lead Scraper | 5 |
| 02 | AI Cold Email Personalizer | 6 |
| 03 | LinkedIn Founder Content Agent | 5 |
| 04 | Inbound Lead Qualifier | 6 |
| 05 | AI SDR Follow-Up Sequencer | 6 |
| 06 | Content Repurposing Pipeline | 5 |
| 07 | Competitor & Market Monitor | 6 |
| 08 | AI Meeting Notes → CRM | 5 |
| 09 | Demo Request Pre-Call Briefing | 6 |
| 10 | Pipeline Health Reporter | 6 |
| 11 | **End-to-End Outbound Engine** (branching, wait, reply detection) | 15 |
| 12 | **Account-Based Intent Engine** (multi-signal, switch, multi-channel) | 14 |
| 13 | **RevOps Forecast Pipeline** (per-deal AI risk + aggregate memo) | 14 |

### First-Time AI Company

| # | Workflow | Nodes |
|---|---|---|
| 01 | Internal RAG Q&A Bot | 5 |
| 02 | Email Triage + Draft Replies | 5 |
| 03 | Invoice / Receipt OCR | 5 |
| 04 | Meeting Transcription → Action Items | 6 |
| 05 | Support Ticket Tagger & Router | 5 |
| 06 | PDF Contract Summarizer | 5 |
| 07 | HR Resume Screener | 5 |
| 08 | Daily Standup Aggregator | 6 |
| 09 | Knowledge Base Auto-Updater | 5 |
| 10 | Error Log Summarizer | 6 |
| 11 | **Full-Stack Support Copilot** (3 channels, RAG, sentiment routing) | 12 |
| 12 | **Document Intelligence Hub** (classify + 4-way switch + extractors) | 13 |
| 13 | **Multi-Source Knowledge Sync** (hourly ingest + daily digest) | 13 |

### Product Manager (all complex, 11–15 nodes)

Stack: Linear + Jira · Amplitude + Mixpanel · Notion · Slack · OpenAI · Qdrant.

| # | Workflow | Nodes |
|---|---|---|
| 01 | Feedback Triage Hub (4 sources + Qdrant dedup → Linear) | 15 |
| 02 | Interview Synthesis Engine (Zoom → Whisper → quote-level Qdrant) | 12 |
| 03 | PRD Draft Generator (Slack `/prd` → retrieve similar → draft → Notion) | 11 |
| 04 | Spec → Linear Tickets Splitter (Notion approved → epic + children + Jira mirror) | 11 |
| 05 | RICE Auto-Scorer (evidence-anchored from feedback + tickets + revenue) | 11 |
| 06 | Stakeholder Roadmap Digest (4 parallel audience versions) | 13 |
| 07 | Product Anomaly Watcher (Amplitude + Mixpanel baseline diff + cause hypothesis) | 12 |
| 08 | Experiment Result Auto-Writer (GrowthBook → decision memo → Linear follow-up) | 11 |
| 09 | Release Notes Auto-Generator (3 parallel audience versions) | 12 |
| 10 | Sprint Retro Bot (metrics + Slack sentiment → retro doc + action tickets) | 12 |

## How to use

1. In n8n: **Workflows → Import from File** → select the `.json`.
2. Open each node and assign your credentials (OpenAI, Gmail, Slack, HubSpot, Notion, etc.).
3. Replace placeholders (`YOUR_SHEET_ID`, `YOUR_DB_ID`, `#channel`, etc.) in the nodes.
4. Test with **Execute Workflow** before flipping **Active** on.
5. Swap OpenAI for Ollama + a local model if you need zero-cost inference.

See [SETUP-CHECKLIST.md](SETUP-CHECKLIST.md) for the complete credential matrix, placeholder map, and webhook registration table.

## Validation

All 36 workflows were imported into a live `n8nio/n8n:latest` Docker container via `n8n import:workflow` — every workflow loads with all nodes recognized and connections intact.

## Rollout suggestions

- **GTM team:** start with 04 (Inbound Qualifier) → 02 (Cold Email) → 06 (Content Repurposing). That covers inbound, outbound, and brand in ~2 weeks.
- **First-time AI:** start with 02 (Email Triage) → 04 (Meeting Action Items) → 01 (Internal RAG). All three are reversible, internal-only, and produce a visible weekly metric for the exec sponsor.
- **Product Manager:** start with 03 (PRD Draft Generator) → 01 (Feedback Triage Hub) → 09 (Release Notes). PRD generator earns trust fast; Feedback Hub becomes the data layer everything else runs on; Release Notes ships every Friday and locks in cadence.

## License

MIT — fork, modify, ship.
