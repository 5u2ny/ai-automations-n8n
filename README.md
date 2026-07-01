# AI Automations for n8n

This repository contains 36 ready-to-import n8n workflow templates for teams that want useful AI automations without starting from a blank canvas.

The workflows cover three common business areas:

- Go-to-market teams that need help with leads, follow-ups, meetings, content, and revenue reporting.
- SMBs that want practical AI enablement for inboxes, documents, support, meetings, and internal knowledge.
- Product teams that want better feedback triage, PRD drafting, release notes, roadmap updates, and experiment summaries.

Each workflow is designed as a practical starting point. You import it into n8n, connect your business tools, replace a few placeholders, test it, and then turn it on.

## What Is n8n?

n8n is an automation tool. It connects apps together so work can move automatically from one system to another.

Example:

1. A customer fills out a form.
2. n8n receives the form.
3. AI reviews the information.
4. The lead is scored.
5. Sales gets a Slack alert.
6. The CRM is updated.

That full process can run without someone copying and pasting between tools.

## Who This Is For

This repo is useful for:

- Founders who want AI workflows they can show or ship quickly.
- GTM teams that want repeatable lead, email, CRM, and reporting automations.
- Operations teams that want internal AI assistants for documents, inboxes, tickets, and meetings.
- Product managers who want AI support for research, PRDs, roadmap updates, experiments, and releases.
- Technical teammates who need importable n8n workflow files instead of only written ideas.

You do not need to be a developer to understand what is inside this repo. You do need access to the apps you want to connect, such as Gmail, Slack, HubSpot, Notion, Linear, Jira, or OpenAI.

## What You Get

| Area | Workflows | Best For |
|---|---:|---|
| GTM Team | 13 | Leads, outbound, CRM updates, meeting briefs, market monitoring, revenue reporting |
| AI Enablement for SMBs | 13 | Email triage, meeting notes, invoice OCR, support routing, contract summaries, internal knowledge search |
| Product Manager | 10 | Feedback triage, interview synthesis, PRDs, tickets, RICE scoring, roadmap digests, experiments, release notes |

Every automation includes:

- A `.json` file that can be imported into n8n.
- A `.md` file that explains what the workflow does.
- A checklist note inside the n8n workflow canvas after import.
- Readiness reporting that shows what must be connected before launch.

## Start Here

If you are not technical, start with this path:

1. Pick one workflow from the recommended list below.
2. Open its matching `.md` file to understand the use case.
3. Ask the person managing n8n to import the `.json` file.
4. Connect only the apps needed for that one workflow.
5. Replace placeholder values like sheet IDs, database IDs, and Slack channel names.
6. Run one test with safe sample data.
7. Turn the workflow on only after the test succeeds.

Do not try to activate all 36 workflows at once. Start with one useful workflow, prove it works, then expand.

## Best First Workflows

These are the easiest and safest workflows to try first:

| Workflow | Why Start Here | Main Apps Needed |
|---|---|---|
| AI Enablement for SMBs 02: Email Triage + Draft Replies | Creates draft replies instead of sending automatically | Gmail, OpenAI |
| AI Enablement for SMBs 04: Meeting Transcription -> Action Items | Turns meeting notes into tasks and summaries | Transcript tool, Notion, Slack, OpenAI |
| GTM Team 04: Inbound Lead Qualifier | Scores inbound leads and alerts sales | Form tool, HubSpot, Slack, OpenAI |
| GTM Team 06: Content Repurposing Pipeline | Turns existing content into reusable social/post ideas | RSS or YouTube, Notion, OpenAI |
| Product Manager 03: PRD Draft Generator | Drafts PRDs from a Slack request and company context | Slack, Notion, OpenAI, Qdrant |
| Product Manager 09: Release Notes Auto-Generator | Creates audience-specific release notes | Linear/Jira, Notion, Slack, OpenAI |

## Two Ways To Use This Repo

### Option 1: Manual Import

Use this if someone already has an n8n account or n8n Cloud workspace.

1. Open n8n.
2. Go to **Workflows**.
3. Choose **Import from File**.
4. Select one `.json` workflow file from this repo.
5. Open the workflow and read the sticky note named **Live Deployment Checklist**.
6. Add credentials for the apps used by that workflow.
7. Replace placeholders.
8. Run a test.
9. Activate the workflow only after the test works.

### Option 2: Local Technical Setup

Use this if a technical teammate wants to run n8n locally with the included database and services.

```bash
cp .env.example .env
# edit .env with your real values
docker compose up -d postgres n8n qdrant redis
npm run readiness
npm run import:workflows
```

Technical setup details are in [docs/LIVE_DEPLOYMENT.md](docs/LIVE_DEPLOYMENT.md).

## Before You Turn Anything On

Every live workflow needs four things checked:

1. **Credentials**: the workflow can log into the apps it needs.
2. **Placeholders**: example values have been replaced with your real sheet IDs, database IDs, channel names, folder IDs, or account IDs.
3. **Webhook setup**: if an outside app needs to call n8n, the production webhook URL has been copied into that app.
4. **Test run**: the workflow has completed once with test data and the final output looks right.

The generated readiness report shows these items for every workflow:

[docs/LIVE_READINESS_REPORT.md](docs/LIVE_READINESS_REPORT.md)

## Common Terms

| Term | Plain-English Meaning |
|---|---|
| Workflow | The full automation from start to finish |
| Node | One step inside a workflow, such as reading Gmail or sending Slack |
| Credential | The login or API connection that lets n8n access an app |
| Placeholder | Example text that must be replaced, such as `YOUR_SHEET_ID` |
| Webhook | A special URL that lets another app send data into n8n |
| Trigger | The event that starts the workflow, such as a new email or scheduled time |
| Active | The workflow is turned on and can run automatically |
| Qdrant | A vector database used for AI search and retrieval |
| RAG | Retrieval-augmented generation; AI answers using stored company knowledge |

## Repository Structure

```text
GTM Team/
  13 workflows for sales, marketing, CRM, outbound, content, and revenue operations

AI Enablement for SMBs/
  13 workflows for internal AI adoption, support, documents, inboxes, meetings, and knowledge bases

Product Manager/
  10 workflows for product research, PRDs, prioritization, experiments, release notes, and retros

docs/
  Live deployment guide and readiness report

scripts/
  Workflow readiness scanner and bulk import script
```

## Workflow Catalog

### GTM Team

| # | Workflow | What It Helps With |
|---|---|---|
| 01 | ICP Lead Scraper | Finds and stores target accounts or leads |
| 02 | AI Cold Email Personalizer | Drafts more relevant outbound emails |
| 03 | LinkedIn Founder Content Agent | Turns ideas into founder-led LinkedIn content |
| 04 | Inbound Lead Qualifier | Scores inbound leads and alerts sales |
| 05 | AI SDR Follow-Up Sequencer | Follows up with prospects based on status |
| 06 | Content Repurposing Pipeline | Converts long-form content into reusable assets |
| 07 | Competitor & Market Monitor | Watches competitor or market updates |
| 08 | AI Meeting Notes -> CRM | Converts meeting notes into CRM updates |
| 09 | Demo Request Pre-Call Briefing | Prepares sales before a demo call |
| 10 | Pipeline Health Reporter | Summarizes sales pipeline health |
| 11 | End-to-End Outbound Engine | Runs a fuller outbound motion with branching and reply detection |
| 12 | Account-Based Intent Engine | Combines account signals into ABM actions |
| 13 | RevOps Forecast Pipeline | Produces AI-assisted deal risk and forecast memos |

### AI Enablement for SMBs

| # | Workflow | What It Helps With |
|---|---|---|
| 01 | Internal RAG Q&A Bot | Lets employees ask questions over company documents |
| 02 | Email Triage + Draft Replies | Sorts email and creates draft replies |
| 03 | Invoice / Receipt OCR | Extracts information from invoices and receipts |
| 04 | Meeting Transcription -> Action Items | Turns meeting transcripts into tasks and summaries |
| 05 | Support Ticket Tagger & Router | Tags and routes support tickets |
| 06 | PDF Contract Summarizer | Summarizes contracts and highlights key terms |
| 07 | HR Resume Screener | Reviews resumes against role criteria |
| 08 | Daily Standup Aggregator | Summarizes daily team updates |
| 09 | Knowledge Base Auto-Updater | Drafts updates to internal knowledge bases |
| 10 | Error Log Summarizer | Groups and explains error logs |
| 11 | Full-Stack Support Copilot | Handles support across multiple channels with escalation |
| 12 | Document Intelligence Hub | Classifies and routes business documents |
| 13 | Multi-Source Knowledge Sync | Syncs knowledge from several sources into one system |

### Product Manager

| # | Workflow | What It Helps With |
|---|---|---|
| 01 | Feedback Triage Hub | Groups feedback and turns it into product action |
| 02 | Interview Synthesis Engine | Summarizes research calls into evidence and themes |
| 03 | PRD Draft Generator | Drafts product requirement documents from a request |
| 04 | Spec -> Linear Tickets Splitter | Breaks approved specs into delivery tickets |
| 05 | RICE Auto-Scorer | Scores ideas using reach, impact, confidence, and effort |
| 06 | Stakeholder Roadmap Digest | Creates roadmap updates for different audiences |
| 07 | Product Anomaly Watcher | Watches product metrics and flags unusual changes |
| 08 | Experiment Result Auto-Writer | Turns experiment results into a decision memo |
| 09 | Release Notes Auto-Generator | Creates release notes for customers, sales, and internal teams |
| 10 | Sprint Retro Bot | Creates retrospectives from metrics and team signals |

## Useful Links

- [Live deployment guide](docs/LIVE_DEPLOYMENT.md)
- [Live readiness report](docs/LIVE_READINESS_REPORT.md)
- [Setup checklist](SETUP-CHECKLIST.md)
- [.env example](.env.example)

## For Technical Operators

Use these commands after editing workflow JSON:

```bash
npm run readiness
npm run readiness:strict
```

Use this command to import all workflows into the local Docker-managed n8n container:

```bash
npm run import:workflows
```

The strict readiness check is expected to fail until real credentials, placeholders, environment variables, and webhook registrations are configured in the target environment.

## License

MIT - fork, modify, and ship.
