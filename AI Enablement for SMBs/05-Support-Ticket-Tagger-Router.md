# 05 — Customer Support Ticket Tagger & Router


## What it does
Reads incoming Zendesk / Intercom tickets, GPT classifies intent + urgency + sentiment, applies tags, and routes to the right queue. Agent still writes the reply.

## Why it's a safe first AI win
Tagging only — no customer-facing AI output. Clean before/after metric (mis-route rate).

## Stack
Zendesk / Intercom webhook → OpenAI → back to ticket API.

## Setup notes
- Start with 5–7 tag categories, not 50.
- Audit weekly for tag drift.
- Measure first-response-time delta as the KPI.
