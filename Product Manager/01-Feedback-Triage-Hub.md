# 01 — Feedback Triage Hub

## What it does
Pulls feedback from Intercom + Zendesk + App Store + Slack #feedback hourly, GPT classifies each as bug/feature/UX/positive/noise with severity, embeds the summary, checks Qdrant for duplicates, and either creates a Linear ticket or comments on the existing duplicate.

## Why it matters for PMs
Source-agnostic backbone. The single workflow that captures every feedback signal across channels and prevents duplicate tickets.

## Stack
Intercom / Zendesk / App Store / Slack → OpenAI classify → Qdrant dedup → Linear (create or comment).

## Setup notes
- Tune the duplicate similarity threshold (default 0.88) to your noise tolerance.
- Train the noise category aggressively — early-stage feedback channels have a lot of low-signal pings.
- Index Linear ticket IDs in Qdrant metadata so dedup actually links back.
