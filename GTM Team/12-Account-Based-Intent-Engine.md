# 12 — Account-Based Intent Signal Engine

## What it does
Collects daily account intent signals from G2, GA4, LinkedIn ads, and internal lists; normalizes the account view; scores intent with GPT; then routes high-intent accounts to HubSpot, Slack, email queue, LinkedIn DM queue, or retargeting.

## Why it wins for GTM
Turns scattered buying signals into a single account-level action system. Sales sees the right accounts, marketing gets retargeting cues, and outbound gets a prioritized queue.

## Stack
Schedule trigger → G2/API signals → GA4 → LinkedIn Ads → merge/code normalization → OpenAI → HubSpot → Slack → Google Sheets → retargeting API.

## Setup notes
- Replace `YOUR_GA_PROP`, `YOUR_SHEET_ID`, and `YOUR_AD_ACCT`.
- Replace `#abm` with the Slack account-based marketing channel.
- Confirm that each signal source uses the same account domain or company identifier before scoring.
- Tune the `Score >= 80?` threshold after reviewing a week of false positives and false negatives.
- Keep the retargeting node disabled until the scoring threshold has been reviewed by a human.

