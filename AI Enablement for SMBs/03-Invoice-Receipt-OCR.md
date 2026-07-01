# 03 — Invoice / Receipt OCR → Accounting


## What it does
Catches invoice PDFs/images sent to a finance inbox, runs GPT-Vision (or Tesseract + GPT) to extract vendor, amount, date, line items, and posts the bill into Xero / QuickBooks.

## Why it's a safe first AI win
Deterministic ROI, finance team is the sponsor, no customer exposure.

## Stack
Gmail → GPT-Vision → Xero / QuickBooks / NetSuite.

## Setup notes
- Hold extractions in a "review" queue for week 1.
- Validate currency and tax code per vendor.
- Reconcile monthly against bank feed.
