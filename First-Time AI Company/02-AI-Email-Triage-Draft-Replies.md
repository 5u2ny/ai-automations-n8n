# 02 — AI Email Triage & Draft Replies


## What it does
Reads incoming Gmail/Outlook, classifies by intent and urgency, and writes a reply draft into the user's drafts folder — human still hits send.

## Why it's a safe first AI win
Drafts only, reversible, instantly understood by every employee.

## Stack
Gmail / Outlook trigger → OpenAI → Gmail drafts API.

## Setup notes
- Never auto-send in v1.
- Exclude calendaring, legal, and HR threads via label filter.
- Track time saved per user as the success metric.
