# 12 — Document Intelligence Hub

## What it does
Watches a Google Drive folder, downloads new files, extracts text, classifies document type with GPT, routes by document class, extracts structured fields for contracts, invoices, and resumes, then saves outputs to Notion, Google Sheets, ATS, or a team Slack channel.

## Why it wins for first-time AI teams
Document processing is one of the safest early AI use cases because the workflow can stay internal, auditable, and reversible. This workflow turns unstructured files into structured review queues.

## Stack
Google Drive trigger → file extraction → OpenAI classification/extraction → switch routing → Notion → Google Sheets → Slack.

## Setup notes
- Replace `YOUR_INBOX_FOLDER`, `YOUR_INBOX_DB`, `YOUR_LEGAL_DB`, `YOUR_AP_SHEET`, and `YOUR_ATS_DB`.
- Replace `#docs` with the document-ops review channel.
- Confirm which file types your n8n instance can extract before relying on the `Extract Text` node.
- Treat extracted fields as draft data until a human verifies contract, invoice, or hiring decisions.
- Keep each routed destination narrow: legal, accounting, ATS, and general inbox should not share the same database.

