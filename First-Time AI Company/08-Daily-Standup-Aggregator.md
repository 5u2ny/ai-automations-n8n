# 08 — Daily Standup Aggregator


## What it does
Pulls yesterday's activity from Slack, Linear, GitHub, Jira per team member; GPT writes a per-person standup note and a team summary in a Slack channel.

## Why it's a safe first AI win
Replaces a 15-min daily meeting; instant cultural buy-in across the org.

## Stack
Slack / Linear / GitHub / Jira APIs → OpenAI → Slack post.

## Setup notes
- Opt-in per person.
- Keep it factual; never editorialize on productivity.
- Pin a weekly rollup on Fridays.
