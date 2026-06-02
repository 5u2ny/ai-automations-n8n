# 03 — PRD Draft Generator

## What it does
Slack `/prd <idea>` slash command → embeds the idea → retrieves 3 most similar past PRDs from Qdrant → GPT drafts a full PRD using them as voice/structure reference → creates a Notion page → indexes the new PRD for future retrieval → posts confirmation in #product.

## Why it matters for PMs
Cuts PRD-zero-to-first-draft from hours to seconds. The retrieval step keeps your team's PRD style consistent.

## Stack
Slack → OpenAI embed → Qdrant retrieve → OpenAI draft → Notion + Slack.

## Setup notes
- Backfill past PRDs into Qdrant once at setup — quality of draft depends on it.
- Always treat the output as a draft, not a finished spec.
- Lock the PRD template in the system prompt so the structure is consistent.
