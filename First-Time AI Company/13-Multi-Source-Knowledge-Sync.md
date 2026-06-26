# 13 — Multi-Source Knowledge Sync

## What it does
Hourly ingest pulls recent Slack threads, Zoom recordings, and sent emails; normalizes and hashes content; embeds it; upserts it into Qdrant; then a daily digest queries the day’s knowledge, summarizes it with GPT, posts to Slack, and archives the result in Notion.

## Why it wins for first-time AI teams
Most company knowledge is trapped in conversations. This workflow creates a lightweight knowledge layer while keeping a human-readable daily digest for visibility and trust.

## Stack
Schedule triggers → Slack → Zoom/API → Gmail → merge/code normalization → OpenAI embeddings → Qdrant → OpenAI summary → Slack → Notion.

## Setup notes
- Replace `#knowledge` with the digest Slack channel.
- Replace `YOUR_KNOWLEDGE_DB` with the Notion archive database.
- Confirm retention and privacy rules before syncing Slack, Zoom, or email content.
- Use hashing to avoid duplicate chunks, but keep source URLs or message IDs for auditability.
- Start with one source, validate digest quality, then add the other sources.

