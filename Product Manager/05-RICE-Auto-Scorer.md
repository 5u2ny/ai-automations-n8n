# 05 — RICE Auto-Scorer

## What it does
New idea created in Notion → embeds the idea → pulls related feedback hits from Qdrant, related Linear tickets via title search, and revenue-tied accounts from a Sheet → merges all evidence → GPT computes Reach/Impact/Confidence/Effort → updates Notion → DMs PM lead if score ≥ 50.

## Why it matters for PMs
Replaces gut RICE with evidence-anchored RICE. The reasoning column shows the why, not just the number.

## Stack
Notion → Qdrant + Linear + Sheet evidence → OpenAI compute → Notion update → Slack.

## Setup notes
- Keep a public scoring rubric in Notion so the AI's outputs are auditable.
- Re-score every quarter — evidence pool changes.
- Flag low-confidence scores; don't trust them in roadmap reviews.
