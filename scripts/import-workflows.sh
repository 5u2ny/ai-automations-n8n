#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is required to import workflows into the compose-managed n8n container." >&2
  exit 1
fi

if [ ! -f .env ]; then
  echo "Missing .env. Copy .env.example to .env and set N8N_ENCRYPTION_KEY first." >&2
  exit 1
fi

docker compose up -d postgres n8n qdrant redis
docker compose exec n8n n8n import:workflow --separate --input=/workflows

echo "Imported workflows. Open ${WEBHOOK_URL:-http://localhost:5678/} and configure credentials/placeholders before activating."

