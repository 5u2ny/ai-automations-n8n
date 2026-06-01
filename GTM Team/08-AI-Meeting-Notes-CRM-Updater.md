# 08 — AI Meeting Notes → CRM Auto-Updater


## What it does
Pulls call transcripts from Fireflies/Otter/Gong, extracts MEDDIC fields, next steps, and risks via GPT, then pushes structured updates to the HubSpot/Salesforce deal record.

## Why it wins for GTM
Eliminates AE admin; deal records stay current, forecast accuracy improves.

## Stack
Fireflies/Otter webhook → OpenAI → HubSpot/Salesforce → Slack (deal channel).

## Setup notes
- Define the MEDDIC (or your stage) schema explicitly in the prompt.
- Always attach the raw transcript link.
- Flag low-confidence extractions for AE review.
