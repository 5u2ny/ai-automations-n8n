# 09 — Release Notes Auto-Generator

## What it does
Every Friday 3pm → pulls Done tickets from Linear + Jira for the past 7 days → filters out internal/infra → GPT writes three versions in parallel (customer, sales, internal) → archives to Notion → drafts a Mailchimp campaign → Slacks the sales and general channels.

## Why it matters for PMs
Release notes ship reliably every Friday without anyone owning it. Three audiences, three voices, one source of truth.

## Stack
Linear + Jira → filter → OpenAI (3 parallel) → Notion + Mailchimp + Slack.

## Setup notes
- Use Linear labels (internal, infra, customer-facing) to keep the filter sharp.
- Mailchimp draft never auto-sends — Marketing reviews before sending.
- Internal version intentionally casual to drive #general engagement.
