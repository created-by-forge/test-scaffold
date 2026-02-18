# Credentials — Flo

This file tracks credential **names only**. Values are stored in `.env` (never committed).

## Environment Variables

| Variable | Purpose | Where Used |
|----------|---------|------------|
| `VITE_SUPABASE_URL` | Supabase project URL | Client-side |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key | Client-side |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase admin key | Server-side (api/) |

## How to Get Values

1. **Supabase:** Project Settings > API > URL and anon/service_role keys
2. Copy `.env.example` to `.env` and fill in values
