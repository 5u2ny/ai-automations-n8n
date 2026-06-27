# Live Deployment Guide

This repo now ships with a repeatable deployment path for running the workflow templates in a real n8n environment. The workflow JSON files intentionally stay inactive until credentials, placeholders, and webhooks are configured.

## 1. Prepare Environment

```bash
cp .env.example .env
```

Edit `.env` and set at minimum:

- `N8N_ENCRYPTION_KEY`: long random string. Keep it stable after first launch or stored credentials cannot be decrypted.
- `POSTGRES_PASSWORD`: non-default value.
- `WEBHOOK_URL`: public HTTPS URL for production webhooks, for example your reverse-proxy or tunnel URL.
- `APOLLO_API_KEY` and `LINEAR_API_KEY` only if you plan to run workflows that reference them directly.

Most app credentials still belong in n8n under **Credentials**, not in `.env`.

## 2. Start n8n

```bash
docker compose up -d postgres n8n qdrant redis
```

Open `http://localhost:5678` for local testing. For production, put n8n behind HTTPS and set `WEBHOOK_URL` to the public base URL before registering external webhooks.

## 3. Import Workflows

```bash
npm run import:workflows
```

The command imports all workflow JSON files into the compose-managed n8n container. After import, each workflow includes a **Live Deployment Checklist** sticky note summarizing detected credentials, placeholders, env vars, and webhook setup.

## 4. Run Readiness Checks

```bash
npm run readiness
```

This regenerates `docs/LIVE_READINESS_REPORT.md` from the actual JSON. Use it as the launch checklist. For a configured production shell, `npm run readiness:strict` fails if placeholders, required env vars, manual triggers, or webhook registrations still need attention.

## 5. Configure Credentials

In n8n, open **Settings -> Credentials** and add only the providers needed by the workflows you plan to activate first. The common first-wave credentials are:

- OpenAI
- Gmail OAuth
- Slack OAuth
- Google Sheets/Drive OAuth
- Notion
- HubSpot
- Qdrant

Keep API keys scoped to the minimum permissions each workflow needs.

## 6. Replace Placeholders

Open the workflow, read its sticky note, then replace every placeholder in the listed nodes. Typical values are Google Sheet IDs, Notion database IDs, Slack channel names, folder IDs, team IDs, and account IDs.

## 7. Register Webhooks

For workflows with webhook triggers, save the workflow first, copy the **Production URL** from the webhook node, and register it in the source system. Use production URLs only after `WEBHOOK_URL` is correct.

## 8. Activate Safely

For each workflow:

1. Execute with test data.
2. Confirm every node reaches green status.
3. Inspect generated drafts, CRM updates, Slack posts, and database writes.
4. Confirm rate limits and human-review branches.
5. Toggle **Active** only after the full path succeeds.

Start with draft-only or internal workflows before activating customer-facing sends.

