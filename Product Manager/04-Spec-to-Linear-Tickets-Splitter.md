# 04 — Spec → Linear Tickets Splitter

## What it does
Notion PRD status flips to Approved → workflow fetches the page body → GPT decomposes into an epic + child tickets with acceptance criteria and point estimates → creates the epic + children in Linear AND mirrors each ticket into Jira → posts summary to #engineering.

## Why it matters for PMs
The handoff from spec to implementation is the most error-prone PM step. This removes the manual ticket-creation tax.

## Stack
Notion (webhook) → OpenAI decompose → Linear epic + children → Jira mirror → Slack.

## Setup notes
- Decomposition quality scales with PRD quality. If GPT splits poorly, fix the PRD.
- Cap at 12 child tickets per epic — beyond that, the GPT split gets vague.
- Tag mirrored Jira tickets with the Linear identifier for two-way sync.
