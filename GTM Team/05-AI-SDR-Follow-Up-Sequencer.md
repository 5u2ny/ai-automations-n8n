# 05 — AI SDR Multi-Touch Follow-Up Sequencer


## What it does
Listens for CRM events (no-reply after N days, opened-but-no-click, demo no-show) and triggers context-aware GPT-drafted follow-ups across email + LinkedIn DM.

## Why it wins for GTM
Replaces the calendar discipline of a junior SDR; nothing falls through cracks.

## Stack
HubSpot / Salesforce webhook → OpenAI → Gmail + Phantombuster (LinkedIn).

## Setup notes
- Cap at 4 touches before manual review.
- Suppress if a meeting is already booked.
- Different prompt per stage (cold, post-demo, post-proposal).
