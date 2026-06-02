# 07 — Product Anomaly Watcher

## What it does
Daily 8am → pulls core funnel metrics from Amplitude + Mixpanel → computes delta vs 7-day baseline → if anomaly (>10% swing), fetches recent Linear releases → GPT hypothesizes cause linked to a suspect ticket → posts to #product-alerts + logs to Notion. Otherwise logs OK to a Sheet.

## Why it matters for PMs
Catches funnel drops before customers do, with a hypothesis ready for the war room.

## Stack
Amplitude + Mixpanel → diff vs baseline → IF anomaly → Linear releases → OpenAI hypothesis → Slack + Notion.

## Setup notes
- Start with one critical funnel (signup or activation). Add more once tuned.
- 10% threshold is a starting point — calibrate to your DAU noise floor.
- Always include the suspect ticket URL so eng can investigate fast.
