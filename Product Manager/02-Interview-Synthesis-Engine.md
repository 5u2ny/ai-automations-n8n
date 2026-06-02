# 02 — Interview Synthesis Engine

## What it does
Zoom recording finishes → Whisper transcribes → GPT extracts JTBD, pains, quotes, personas → each quote is embedded into Qdrant → Notion research page is created → cross-interview synthesis posts patterns to #research.

## Why it matters for PMs
Customer research scales. You stop forgetting quotes from interview #3 by the time you do interview #30.

## Stack
Zoom → Whisper → OpenAI → Qdrant (quote-level) → Notion + Slack.

## Setup notes
- Use speaker labels in Whisper to keep customer vs interviewer separate.
- Tag quotes by topic, not just JTBD — makes future queries richer.
- Pin a weekly synthesis re-run that queries Qdrant for recurring themes.
