# 11 — Full-Stack Support Copilot

## What it does
Accepts support requests from email, Slack, and a web widget; normalizes the input; classifies the issue; searches a Qdrant knowledge base; drafts an answer with GPT; escalates negative-sentiment cases; sends safe auto-replies; and logs activity to an analytics sheet.

## Why it wins for first-time AI teams
It is a practical support copilot with clear human escalation. Teams get faster draft replies and routing without handing every customer interaction to an unsupervised AI system.

## Stack
Gmail trigger + Slack/web webhooks → code normalization → OpenAI classify/draft → OpenAI embeddings → Qdrant → Slack → Gmail → Google Sheets.

## Setup notes
- Replace `#support-escalations` with the human escalation channel.
- Replace `YOUR_SHEET` with the support analytics Google Sheet.
- Load approved help-center content into Qdrant before activating auto-replies.
- Keep the negative-sentiment escalation branch strict for billing, churn, legal, and safety complaints.
- Start in draft/review mode before sending customer-facing replies automatically.

