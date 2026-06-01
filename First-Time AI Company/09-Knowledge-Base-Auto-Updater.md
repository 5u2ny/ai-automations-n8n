# 09 — AI Knowledge Base Auto-Updater


## What it does
Clusters recent Zendesk/Intercom tickets, GPT identifies recurring issues without a KB article, drafts new articles into Confluence/Notion for support lead review.

## Why it's a safe first AI win
Compounds over time: every week, KB coverage improves and ticket volume drops.

## Stack
Zendesk / Intercom → OpenAI clustering + drafting → Confluence / Notion (draft state).

## Setup notes
- Drafts only — human publishes.
- Show ticket count per cluster to prioritize.
- Re-cluster weekly, not daily.
