# 06 — Content Repurposing Pipeline


## What it does
Watches a YouTube channel or blog RSS for new uploads, transcribes (Whisper), and uses GPT to generate a LinkedIn post, X thread, and newsletter blurb.

## Why it wins for GTM
1 hero asset → 5 channels. The highest-leverage marketing automation, period.

## Stack
YouTube/RSS trigger → Whisper → OpenAI → Buffer / Typefully / Beehiiv.

## Setup notes
- Keep platform-specific tone prompts separate.
- Queue, do not auto-publish.
- Add UTM tagging at the end of the chain.
