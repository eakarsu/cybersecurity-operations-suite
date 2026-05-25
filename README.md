# Cybersecurity Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AICyberSOCCopilot`
- `AIAutonomousPenTestingAgent`
- `AIOTSecOpsForICS`
- `security_detection`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/cybersecurity-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4200`

Seeded users:
- `admin@cybersecurity.local / admin123`
- `manager@cybersecurity.local / manager123`
- `analyst@cybersecurity.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/cybersecurity-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4200 npm run smoke
```
