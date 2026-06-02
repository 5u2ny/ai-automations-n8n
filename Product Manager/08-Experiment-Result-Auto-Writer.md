# 08 — Experiment Result Auto-Writer

## What it does
Experiment ends (GrowthBook/Statsig webhook) → fetches variant metrics from Amplitude + Mixpanel → computes lift and sample size → GPT writes a decision memo (ship/iterate/kill) → creates Notion experiment page with structured decision → posts to #experiments → creates a follow-up Linear ticket.

## Why it matters for PMs
Closes the loop on every experiment. No more orphaned tests with no decision logged.

## Stack
GrowthBook → Amplitude + Mixpanel → stats calc → OpenAI memo → Notion + Slack + Linear.

## Setup notes
- Always flag low-sample experiments — confidence matters more than lift.
- Treat the decision memo as a draft; PM reviews before merging into roadmap.
- Index past experiment memos in Qdrant so you stop re-running the same test.
