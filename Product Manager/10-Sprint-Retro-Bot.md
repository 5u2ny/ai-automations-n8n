# 10 — Sprint Retro Bot

## What it does
End of every 2-week sprint → pulls Linear velocity + carryover, Jira sprint report, and 14 days of squad Slack messages → computes metrics → GPT scans Slack for sentiment signals → GPT writes the retro doc → archives to Notion → posts to #squad-retro with reaction prompts → creates a Linear ticket per action item.

## Why it matters for PMs
Retros stop being a meeting and become a doc that auto-generates with metrics + sentiment baked in.

## Stack
Linear + Jira + Slack → metrics calc → OpenAI sentiment + retro doc → Notion + Slack + Linear.

## Setup notes
- Sentiment scan is fuzzy — frame it as a starting point, not a verdict.
- Cap action items at 3 per retro or they don't get done.
- Pin the doc in the squad channel and review at next sprint kickoff.
