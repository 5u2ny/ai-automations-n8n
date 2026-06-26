# 11 — End-to-End Outbound Engine

## What it does
Runs a daily outbound motion: finds ICP leads, enriches company context, scores fit with GPT, personalizes email, logs hot prospects, waits for replies, alerts sales on engagement, and sends a follow-up when there is no response.

## Why it wins for GTM
Combines list building, enrichment, AI scoring, personalization, send, reply detection, and AE routing in one inspectable workflow. It is the full outbound loop instead of a disconnected set of SDR tasks.

## Stack
Schedule trigger → Apollo API → Clearbit/API enrichment → OpenAI → Gmail → Google Sheets → Wait → Gmail reply check → Slack.

## Setup notes
- Replace `YOUR_SHEET_ID` in the hot-lead and nurture logging nodes.
- Replace `#sales-hot` with the Slack channel that should receive reply alerts.
- Add Apollo/Clearbit-style API credentials or swap the HTTP nodes for your enrichment provider.
- Keep daily send volume conservative and use a separate sending domain.
- Review the GPT fit-score prompt before using it for paid outbound.

