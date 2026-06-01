# 01 — ICP Lead Scraper


## What it does
Scrapes target accounts/contacts from Apollo, Google Maps, or Yelp into a Google Sheet based on your ICP filters (industry, headcount, geo, tech stack).

## Why it wins for GTM
Builds your first 1,000-row target list without paying for ZoomInfo or Apollo seats per rep.

## Stack
Apify / Google Maps node / Yelp node → Google Sheets → (optional) Clearbit/Hunter for email enrichment.

## Setup notes
- Define ICP filters first; bad inputs = bad pipeline.
- Add dedup step against existing CRM exports.
- Respect ToS and rate limits.
