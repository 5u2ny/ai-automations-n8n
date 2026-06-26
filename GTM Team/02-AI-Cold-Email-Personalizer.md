# 02 — AI Cold Email Personalizer


## What it does
Reads each row from a leads Sheet, pulls company context (website, LinkedIn, recent news), and uses GPT to draft a 1:1 personalized cold email, then sends via Instantly or Gmail.

## Why it wins for GTM
1:1 personalization at SDR-team scale — the core outbound engine.

## Stack
Google Sheets → HTTP scrape / SerpAPI → OpenAI → Instantly / Gmail / Smartlead.

## Setup notes
- This workflow currently has no trigger node. Run it manually, call it from another workflow, or add a Schedule Trigger before `Read Leads Sheet` if you want it to run automatically.
- Cap to ~50/day per inbox to protect deliverability.
- Use a separate sending domain.
- A/B test subject lines via two parallel branches.
