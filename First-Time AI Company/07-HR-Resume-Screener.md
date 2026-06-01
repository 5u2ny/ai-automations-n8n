# 07 — HR Resume Screener


## What it does
On new Greenhouse/Lever application (or Drive upload), GPT scores the resume against a published rubric and writes structured notes back to the ATS.

## Why it's a safe first AI win
Rubric-based and auditable; recruiters still make the call.

## Stack
Greenhouse / Lever / Drive → OpenAI → ATS API + Slack notify.

## Setup notes
- Publish the rubric and review for bias before launch.
- Recruiter overrides the score; train the prompt from overrides.
- Never auto-reject.
