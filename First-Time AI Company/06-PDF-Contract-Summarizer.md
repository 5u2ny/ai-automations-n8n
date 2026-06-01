# 06 — PDF / Contract Summarizer


## What it does
Watches a Drive folder for new contracts/PDFs, GPT produces a structured summary (parties, term, payment, auto-renew, risky clauses) and saves a sibling summary doc.

## Why it's a safe first AI win
Huge legal/ops time saver, easy to demo to leadership.

## Stack
Google Drive trigger → PDF text extract → OpenAI → Google Doc / Notion.

## Setup notes
- Always include a "verify with counsel" disclaimer.
- Flag auto-renewal and termination clauses explicitly.
- Keep summaries under 1 page.
