# 01 — Internal RAG Q&A Bot over Company Docs


## What it does
Indexes Google Drive / Notion / Confluence into a Qdrant or Pinecone vector store; employees ask handbook, policy, or product questions in Slack and get cited answers.

## Why it's a safe first AI win
Internal-only, no customer exposure, immediate productivity gain.

## Stack
Google Drive / Notion → embeddings (OpenAI or local) → Qdrant → Slack slash command → OpenAI.

## Setup notes
- Restrict to non-sensitive doc collections in v1.
- Always show source links so users verify.
- Add a thumbs-up/down feedback loop.
