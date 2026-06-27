# Live Readiness Report

Generated: 2026-06-26T21:52:39.832Z

This report is generated from the workflow JSON files. A workflow is live-ready only after credentials, placeholders, environment variables, and webhook registrations are configured in the target n8n instance.

## Summary

- Workflows scanned: 36
- Workflows with unresolved placeholders: 30
- Workflows with direct environment variables: 11
- Workflows with webhook nodes: 15
- Workflows without a trigger: 1

## Workflow Matrix

| Workflow | Trigger | Credentials/services | Placeholders | Env vars | Webhooks | Activation blockers |
|---|---|---|---|---|---|---|
| First-Time AI Company/01-Internal-RAG-QA-Bot | Slack Slash /ask | OpenAI<br>OpenAI embeddings<br>Qdrant | - | - | Slack Slash /ask | 3 credential/service group(s)<br>1 external webhook registration(s) |
| First-Time AI Company/02-AI-Email-Triage-Draft-Replies | Gmail New Email | Gmail OAuth<br>OpenAI | - | - | - | 2 credential/service group(s) |
| First-Time AI Company/03-Invoice-Receipt-OCR | Finance Inbox Trigger | Gmail OAuth<br>Google Sheets<br>OpenAI<br>Slack OAuth | #finance<br>YOUR_SHEET | - | - | 2 placeholder value(s)<br>4 credential/service group(s) |
| First-Time AI Company/04-Meeting-Transcription-Action-Items | Otter Webhook | Meeting transcript provider<br>Notion<br>OpenAI<br>Slack OAuth | #meetings<br>YOUR_TASKS_DB | - | Otter Webhook | 2 placeholder value(s)<br>4 credential/service group(s)<br>1 external webhook registration(s) |
| First-Time AI Company/05-Support-Ticket-Tagger-Router | Zendesk Webhook | OpenAI<br>Slack OAuth<br>Zendesk | #cs-escalations | - | Zendesk Webhook | 1 placeholder value(s)<br>3 credential/service group(s)<br>1 external webhook registration(s) |
| First-Time AI Company/06-PDF-Contract-Summarizer | Drive New File | Google Drive<br>OpenAI | YOUR_CONTRACTS_FOLDER<br>YOUR_SUMMARIES_FOLDER | - | - | 2 placeholder value(s)<br>2 credential/service group(s) |
| First-Time AI Company/07-HR-Resume-Screener | Greenhouse Webhook | OpenAI | - | - | Greenhouse Webhook | 1 credential/service group(s)<br>1 external webhook registration(s) |
| First-Time AI Company/08-Daily-Standup-Aggregator | Daily 9am | Linear API<br>OpenAI<br>Slack OAuth | #standup<br>YOUR_ORG<br>YOUR_REPO | LINEAR_API_KEY | - | 3 placeholder value(s)<br>1 environment variable(s)<br>3 credential/service group(s) |
| First-Time AI Company/09-Knowledge-Base-Auto-Updater | Weekly Sunday | Notion<br>OpenAI<br>Zendesk | YOUR_KB_DB | - | - | 1 placeholder value(s)<br>3 credential/service group(s) |
| First-Time AI Company/10-Error-Log-Summarizer | Hourly Flush<br>Sentry Webhook | OpenAI<br>Redis<br>Slack OAuth | #errors | - | Sentry Webhook | 1 placeholder value(s)<br>3 credential/service group(s)<br>1 external webhook registration(s) |
| First-Time AI Company/11-Full-Stack-Support-Copilot | Email Inbound<br>Slack Inbound<br>Web Widget | Gmail OAuth<br>Google Sheets<br>OpenAI<br>OpenAI embeddings<br>Qdrant<br>Slack OAuth | #support-escalations<br>YOUR_SHEET | - | Slack Inbound<br>Web Widget | 2 placeholder value(s)<br>6 credential/service group(s)<br>2 external webhook registration(s) |
| First-Time AI Company/12-Document-Intelligence-Hub | Drive New File | Google Drive<br>Google Sheets<br>Notion<br>OpenAI<br>Slack OAuth | #docs<br>YOUR_AP_SHEET<br>YOUR_ATS_DB<br>YOUR_INBOX_DB<br>YOUR_INBOX_FOLDER<br>YOUR_LEGAL_DB | - | - | 6 placeholder value(s)<br>5 credential/service group(s) |
| First-Time AI Company/13-Multi-Source-Knowledge-Sync | Daily 6pm<br>Hourly Ingest | Gmail OAuth<br>Meeting transcript provider<br>Notion<br>OpenAI<br>OpenAI embeddings<br>Qdrant<br>Slack OAuth | #knowledge<br>YOUR_KNOWLEDGE_DB | - | - | 2 placeholder value(s)<br>7 credential/service group(s) |
| GTM Team/01-ICP-Lead-Scraper | Cron Daily | Apollo API<br>Google Sheets | YOUR_SHEET_ID | APOLLO_API_KEY | - | 1 placeholder value(s)<br>1 environment variable(s)<br>2 credential/service group(s) |
| GTM Team/02-AI-Cold-Email-Personalizer | Manual/upstream | Gmail OAuth<br>Google Sheets<br>OpenAI | YOUR_SHEET_ID | - | - | 1 placeholder value(s)<br>3 credential/service group(s)<br>manual trigger or upstream workflow call required |
| GTM Team/03-LinkedIn-Founder-Content-Agent | Telegram Voice In | Notion<br>OpenAI<br>Telegram bot | YOUR_DB_ID | - | - | 1 placeholder value(s)<br>3 credential/service group(s) |
| GTM Team/04-Inbound-Lead-Qualifier | Form Webhook | Clearbit or enrichment API<br>HubSpot<br>OpenAI<br>Slack OAuth | #sales-hot | - | Form Webhook | 1 placeholder value(s)<br>4 credential/service group(s)<br>1 external webhook registration(s) |
| GTM Team/05-AI-SDR-Follow-Up-Sequencer | HubSpot Event | Gmail OAuth<br>HubSpot<br>OpenAI | - | - | HubSpot Event | 3 credential/service group(s)<br>1 external webhook registration(s) |
| GTM Team/06-Content-Repurposing-Pipeline | YouTube RSS | Notion<br>OpenAI | YOUR_CHANNEL_ID<br>YOUR_DB | - | - | 2 placeholder value(s)<br>2 credential/service group(s) |
| GTM Team/07-Competitor-Market-Monitor | Daily 8am | OpenAI<br>Slack OAuth | #competitive-intel | - | - | 1 placeholder value(s)<br>2 credential/service group(s) |
| GTM Team/08-AI-Meeting-Notes-CRM-Updater | Fireflies Webhook | HubSpot<br>Meeting transcript provider<br>OpenAI | - | - | Fireflies Webhook | 3 credential/service group(s)<br>1 external webhook registration(s) |
| GTM Team/09-Demo-Request-Pre-Call-Briefing | Calendly Webhook | Calendly webhook<br>Gmail OAuth<br>OpenAI | - | - | Calendly Webhook | 3 credential/service group(s)<br>1 external webhook registration(s) |
| GTM Team/10-Pipeline-Health-Reporter | Monday 7am | HubSpot<br>Notion<br>OpenAI<br>Slack OAuth | #leadership<br>YOUR_DB | - | - | 2 placeholder value(s)<br>4 credential/service group(s) |
| GTM Team/11-Outbound-Engine-End-to-End | Cron 09:00 | Apollo API<br>Clearbit or enrichment API<br>Gmail OAuth<br>Google Sheets<br>OpenAI<br>Slack OAuth | #sales-hot<br>YOUR_SHEET_ID | APOLLO_API_KEY | - | 2 placeholder value(s)<br>1 environment variable(s)<br>6 credential/service group(s) |
| GTM Team/12-Account-Based-Intent-Engine | Daily 7am<br>Trigger Retarget Ad | Google Sheets<br>HubSpot<br>OpenAI<br>Slack OAuth | #abm<br>YOUR_GA_PROP<br>YOUR_SHEET_ID | - | - | 3 placeholder value(s)<br>4 credential/service group(s) |
| GTM Team/13-RevOps-Forecast-Pipeline | Weekly Mon 6am | Gmail OAuth<br>HubSpot<br>Notion<br>OpenAI<br>Slack OAuth | #exec<br>YOUR_FORECAST_DB | - | - | 2 placeholder value(s)<br>5 credential/service group(s) |
| Product Manager/01-Feedback-Triage-Hub | Hourly Trigger | Linear API<br>OpenAI<br>OpenAI embeddings<br>Qdrant<br>Slack OAuth<br>Zendesk | #feedback<br>YOUR_APP_ID<br>YOUR_TEAM | LINEAR_API_KEY | - | 3 placeholder value(s)<br>1 environment variable(s)<br>6 credential/service group(s) |
| Product Manager/02-Interview-Synthesis-Engine | Zoom Webhook | Google Drive<br>Meeting transcript provider<br>Notion<br>OpenAI<br>OpenAI embeddings<br>Qdrant<br>Slack OAuth | #research<br>YOUR_RESEARCH_DB<br>YOUR_RESEARCH_FOLDER | - | Zoom Webhook | 3 placeholder value(s)<br>7 credential/service group(s)<br>1 external webhook registration(s) |
| Product Manager/03-PRD-Draft-Generator | Slack /prd | Notion<br>OpenAI<br>OpenAI embeddings<br>Qdrant<br>Slack OAuth | YOUR_PRD_DB | - | Slack /prd | 1 placeholder value(s)<br>5 credential/service group(s)<br>1 external webhook registration(s) |
| Product Manager/04-Spec-to-Linear-Tickets-Splitter | Notion Status Change | Jira API<br>Linear API<br>Notion<br>OpenAI<br>Slack OAuth | #eng<br>YOUR_ORG<br>YOUR_PROJECT<br>YOUR_TEAM | LINEAR_API_KEY | Notion Status Change | 4 placeholder value(s)<br>1 environment variable(s)<br>5 credential/service group(s)<br>1 external webhook registration(s) |
| Product Manager/05-RICE-Auto-Scorer | Notion Idea Created | Google Sheets<br>Linear API<br>Notion<br>OpenAI<br>OpenAI embeddings<br>Qdrant<br>Slack OAuth | YOUR_ARR_SHEET | LINEAR_API_KEY | Notion Idea Created | 1 placeholder value(s)<br>1 environment variable(s)<br>7 credential/service group(s)<br>1 external webhook registration(s) |
| Product Manager/06-Stakeholder-Roadmap-Digest | Monday 7am | Gmail OAuth<br>Jira API<br>Linear API<br>Notion<br>OpenAI<br>Slack OAuth | #cs-product<br>#eng-roadmap<br>#exec<br>YOUR_ORG<br>YOUR_ROADMAP_DB<br>yourco | LINEAR_API_KEY | - | 6 placeholder value(s)<br>1 environment variable(s)<br>6 credential/service group(s) |
| Product Manager/07-Product-Anomaly-Watcher | Daily 8am | Amplitude API<br>Google Sheets<br>Linear API<br>Mixpanel API<br>Notion<br>OpenAI<br>Slack OAuth | #metrics-ok<br>#product-alerts<br>YOUR_ANOMALY_LOG_DB<br>YOUR_METRICS_SHEET | LINEAR_API_KEY | - | 4 placeholder value(s)<br>1 environment variable(s)<br>7 credential/service group(s) |
| Product Manager/08-Experiment-Result-Auto-Writer | Experiment End Webhook | Amplitude API<br>GrowthBook or Statsig API<br>Linear API<br>Mixpanel API<br>Notion<br>OpenAI<br>Slack OAuth | #experiments<br>YOUR_EXPERIMENTS_DB<br>YOUR_TEAM | LINEAR_API_KEY | Experiment End Webhook | 3 placeholder value(s)<br>1 environment variable(s)<br>7 credential/service group(s)<br>1 external webhook registration(s) |
| Product Manager/09-Release-Notes-Auto-Generator | Friday 3pm | Jira API<br>Linear API<br>Mailchimp<br>Notion<br>OpenAI<br>Slack OAuth | #general<br>#sales-enablement<br>YOUR_DC<br>YOUR_LIST<br>YOUR_ORG<br>YOUR_RELEASES_DB<br>yourco | LINEAR_API_KEY | - | 7 placeholder value(s)<br>1 environment variable(s)<br>6 credential/service group(s) |
| Product Manager/10-Sprint-Retro-Bot | Sprint End (every 2w) | Jira API<br>Linear API<br>Notion<br>OpenAI<br>Slack OAuth | #squad-retro<br>YOUR_ORG<br>YOUR_RETROS_DB<br>YOUR_TEAM | LINEAR_API_KEY | - | 4 placeholder value(s)<br>1 environment variable(s)<br>5 credential/service group(s) |

## Live Activation Rule

Do not activate a workflow directly after import. Configure credentials and replacements, run one execution with representative test data, confirm the final node succeeds, then toggle Active.

## Fastest Safe Rollout

1. FirstAI 02 Email Triage + Draft Replies: OpenAI + Gmail only, drafts instead of sends.
2. FirstAI 04 Meeting Transcription Action Items: transcript webhook + Notion/Slack, no customer-facing output.
3. GTM 04 Inbound Lead Qualifier: form webhook + enrichment + HubSpot/Slack, clear revenue KPI.
4. Product Manager 03 PRD Draft Generator: Slack command + Notion + Qdrant, draft-only output.
