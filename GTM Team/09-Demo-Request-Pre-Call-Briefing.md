# 09 — Demo Request → Calendly + Pre-Call Research Brief


## What it does
When a prospect books via Calendly, scrapes their LinkedIn + company site, GPT writes a 1-page pre-call brief (hypotheses, talking points, mutual connections) and drops it on the AE's calendar event.

## Why it wins for GTM
AEs walk into every demo prepared; win rate climbs without more headcount.

## Stack
Calendly webhook → SerpAPI / scrape → OpenAI → Google Calendar attachment + Slack DM.

## Setup notes
- Cap brief at 1 page — AEs won't read more.
- Include 3 sharp questions, not generic ones.
- Keep a feedback loop: AE thumbs-up/down trains the prompt.
