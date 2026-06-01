# 07 — Competitor & Market Monitor → Slack Digest


## What it does
Polls competitor blogs, RSS, changelogs, Reddit, Hacker News, and Product Hunt; GPT summarizes new mentions into a daily Slack digest.

## Why it wins for GTM
Replaces Crayon-class tools for early-stage PMM at $0.

## Stack
RSS / Reddit / HN / PH APIs → OpenAI summarization → Slack.

## Setup notes
- Maintain a list of competitor domains and product names.
- Dedup against yesterday's digest.
- Tag items by category (pricing, feature, hire, funding).
