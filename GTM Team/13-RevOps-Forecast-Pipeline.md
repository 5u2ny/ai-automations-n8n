# 13 — Revenue Operations Forecast Pipeline

## What it does
Runs weekly across open deals, pulls activity and recent email context, scores deal risk with GPT, aggregates the portfolio, writes a forecast memo, alerts leadership, archives the memo, updates HubSpot risk fields, and DMs owners on at-risk deals.

## Why it wins for GTM
Replaces manual forecast prep with a consistent operating cadence. The workflow keeps deal risk visible, creates a reusable forecast archive, and makes follow-up ownership explicit.

## Stack
Schedule trigger → HubSpot → Gmail → merge/aggregate → OpenAI → Slack → Notion → HubSpot updates.

## Setup notes
- Replace `#exec` with the leadership Slack channel.
- Replace `YOUR_FORECAST_DB` with the Notion database used for weekly forecast archives.
- Confirm HubSpot deal properties for stage, owner, close date, amount, and risk fields.
- Review the forecast memo prompt with RevOps before using the output in executive reporting.
- Keep the DM step active only after deal owners agree on the risk-scoring language.

