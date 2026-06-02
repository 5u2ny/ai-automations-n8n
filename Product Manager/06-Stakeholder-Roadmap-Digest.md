# 06 — Stakeholder Roadmap Digest

## What it does
Every Monday 7am → pulls active work from Linear + Jira → merges → GPT writes 4 audience-specific versions (Sales, CS, Exec, Eng) in parallel → emails Sales, Slack-posts the other three → archives all four to Notion.

## Why it matters for PMs
One source of truth, four audiences served. Each audience gets exactly what they need without the cross-functional confusion of a single doc.

## Stack
Linear + Jira → OpenAI (4 parallel prompts) → Gmail + Slack + Notion.

## Setup notes
- Lock the 4 audience system prompts — drift causes complaints.
- Always include 'what's NOT shipping' for Sales — prevents over-promising.
- Include numbers (target dates, % done) only when high-confidence.
