# 10 — Anomaly / Error Log Summarizer


## What it does
Streams Sentry/Datadog/CloudWatch errors, GPT clusters by root cause and posts a deduped Slack digest with suggested owners.

## Why it's a safe first AI win
First AI win for engineering; reduces alert fatigue with a measurable noise-reduction KPI.

## Stack
Sentry / Datadog / CloudWatch webhook → OpenAI clustering → Slack.

## Setup notes
- Group by stack trace fingerprint, not message text.
- Suppress known-issue fingerprints.
- Page only on new, high-frequency clusters.
