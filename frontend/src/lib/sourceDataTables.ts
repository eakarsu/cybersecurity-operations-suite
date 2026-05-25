export type SourceDataColumn = {
  name: string;
  type: string;
  nullable: boolean;
  primaryKey: boolean;
  unique: boolean;
  defaultValue: string;
  sourceLine: string;
};

export type SourceDataTable = {
  id: string;
  sourceProject: string;
  name: string;
  displayName: string;
  framework: string;
  sourceFile: string;
  columns: SourceDataColumn[];
};

export const sourceDataTables: SourceDataTable[] = [
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-001-schema-sql-ai-results",
    "sourceProject": "AICyberSOCCopilot",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id          SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature     VARCHAR(64) NOT NULL"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input       JSONB"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result      JSONB"
      },
      {
        "name": "created_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by  VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at  TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-001-schema-sql-alerts",
    "sourceProject": "AICyberSOCCopilot",
    "name": "alerts",
    "displayName": "Alerts",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id           SERIAL PRIMARY KEY"
      },
      {
        "name": "alert_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "alert_id     VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source       VARCHAR(100)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "severity     VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title        VARCHAR(500) NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status       VARCHAR(50) DEFAULT 'open'"
      },
      {
        "name": "asset",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "asset        VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at   TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-002-schema-extended-sql-allowlists",
    "sourceProject": "AICyberSOCCopilot",
    "name": "allowlists",
    "displayName": "Allowlists",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema_extended.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "entry_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "entry_id        VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            VARCHAR(20)"
      },
      {
        "name": "value",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value           VARCHAR(500)"
      },
      {
        "name": "scope",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scope           VARCHAR(255)"
      },
      {
        "name": "justification",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "justification   TEXT"
      },
      {
        "name": "added_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "added_by        VARCHAR(255)"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at      TIMESTAMPTZ"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-001-schema-sql-assets",
    "sourceProject": "AICyberSOCCopilot",
    "name": "assets",
    "displayName": "Assets",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id          SERIAL PRIMARY KEY"
      },
      {
        "name": "asset_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "asset_id    VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "hostname",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hostname    VARCHAR(255) NOT NULL"
      },
      {
        "name": "ip",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ip          VARCHAR(64)"
      },
      {
        "name": "os",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "os          VARCHAR(100)"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner       VARCHAR(255)"
      },
      {
        "name": "criticality",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "criticality VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "last_seen",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "last_seen   TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-002-schema-extended-sql-attachments",
    "sourceProject": "AICyberSOCCopilot",
    "name": "attachments",
    "displayName": "Attachments",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema_extended.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id               SERIAL PRIMARY KEY"
      },
      {
        "name": "owner_collection",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner_collection VARCHAR(64) NOT NULL"
      },
      {
        "name": "owner_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner_id         VARCHAR(64) NOT NULL"
      },
      {
        "name": "filename",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filename         VARCHAR(255) NOT NULL"
      },
      {
        "name": "mime",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mime             VARCHAR(100)"
      },
      {
        "name": "size",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "size             INTEGER"
      },
      {
        "name": "uploaded_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploaded_by      VARCHAR(255)"
      },
      {
        "name": "path",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "path             VARCHAR(500)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at       TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-001-schema-sql-audit-log",
    "sourceProject": "AICyberSOCCopilot",
    "name": "audit_log",
    "displayName": "Audit Log",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id         SERIAL PRIMARY KEY"
      },
      {
        "name": "log_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "log_id     VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "actor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actor      VARCHAR(255)"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action     VARCHAR(255)"
      },
      {
        "name": "target",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target     VARCHAR(255)"
      },
      {
        "name": "timestamp",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "timestamp  TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result     VARCHAR(50)"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-002-schema-extended-sql-blocklists",
    "sourceProject": "AICyberSOCCopilot",
    "name": "blocklists",
    "displayName": "Blocklists",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema_extended.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "entry_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "entry_id        VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            VARCHAR(20)"
      },
      {
        "name": "value",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value           VARCHAR(500)"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source          VARCHAR(255)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity        VARCHAR(20)"
      },
      {
        "name": "added_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "added_at        TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status          VARCHAR(32) DEFAULT 'active'"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-002-schema-extended-sql-certificates",
    "sourceProject": "AICyberSOCCopilot",
    "name": "certificates",
    "displayName": "Certificates",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema_extended.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "cert_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "cert_id         VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "common_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "common_name     VARCHAR(255) NOT NULL"
      },
      {
        "name": "issuer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issuer          VARCHAR(255)"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at      TIMESTAMPTZ"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status          VARCHAR(32) DEFAULT 'active'"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner           VARCHAR(255)"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-002-schema-extended-sql-change-requests",
    "sourceProject": "AICyberSOCCopilot",
    "name": "change_requests",
    "displayName": "Change Requests",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema_extended.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "cr_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "cr_id           VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "summary",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "summary         VARCHAR(500)"
      },
      {
        "name": "requester",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "requester       VARCHAR(255)"
      },
      {
        "name": "risk",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'low'",
        "sourceLine": "risk            VARCHAR(20) DEFAULT 'low'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'submitted'",
        "sourceLine": "status          VARCHAR(32) DEFAULT 'submitted'"
      },
      {
        "name": "approved_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approved_by     VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-002-schema-extended-sql-evidence-library",
    "sourceProject": "AICyberSOCCopilot",
    "name": "evidence_library",
    "displayName": "Evidence Library",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema_extended.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "evidence_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "evidence_id     VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "control",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "control         VARCHAR(255)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            VARCHAR(32)"
      },
      {
        "name": "collected_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "collected_at    TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "collected_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "collected_by    VARCHAR(255)"
      },
      {
        "name": "valid_until",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "valid_until     TIMESTAMPTZ"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-002-schema-extended-sql-exceptions",
    "sourceProject": "AICyberSOCCopilot",
    "name": "exceptions",
    "displayName": "Exceptions",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema_extended.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "exception_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "exception_id    VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "control",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "control         VARCHAR(255)"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner           VARCHAR(255)"
      },
      {
        "name": "justification",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "justification   TEXT"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at      TIMESTAMPTZ"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status          VARCHAR(32) DEFAULT 'active'"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-001-schema-sql-incidents",
    "sourceProject": "AICyberSOCCopilot",
    "name": "incidents",
    "displayName": "Incidents",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                   SERIAL PRIMARY KEY"
      },
      {
        "name": "incident_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "incident_id          VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title                VARCHAR(500) NOT NULL"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "severity             VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status               VARCHAR(50) DEFAULT 'open'"
      },
      {
        "name": "assignee",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignee             VARCHAR(255)"
      },
      {
        "name": "opened_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "opened_at            TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "sla_breach_in_min",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sla_breach_in_min    INTEGER"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-001-schema-sql-iocs",
    "sourceProject": "AICyberSOCCopilot",
    "name": "iocs",
    "displayName": "Iocs",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id          SERIAL PRIMARY KEY"
      },
      {
        "name": "ioc_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "ioc_id      VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type        VARCHAR(50)"
      },
      {
        "name": "value",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value       VARCHAR(500) NOT NULL"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source      VARCHAR(255)"
      },
      {
        "name": "confidence",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.5",
        "sourceLine": "confidence  NUMERIC(3,2) DEFAULT 0.5"
      },
      {
        "name": "first_seen",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "first_seen  TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-002-schema-extended-sql-notifications",
    "sourceProject": "AICyberSOCCopilot",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema_extended.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id           SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id      INTEGER"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type         VARCHAR(64)"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message      TEXT NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at   TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "read",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "read         BOOLEAN DEFAULT FALSE"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-003-pass7-oncall-sql-oncall-pages",
    "sourceProject": "AICyberSOCCopilot",
    "name": "oncall_pages",
    "displayName": "Oncall Pages",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_pass7_oncall.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                SERIAL PRIMARY KEY"
      },
      {
        "name": "page_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "page_id           VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "policy_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "policy_id         VARCHAR(64)"
      },
      {
        "name": "incident_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "incident_id       VARCHAR(64)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'P2'",
        "sourceLine": "severity          VARCHAR(20) DEFAULT 'P2'"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message           TEXT"
      },
      {
        "name": "current_step",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "current_step      INTEGER DEFAULT 0"
      },
      {
        "name": "chain_snapshot",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'::jsonb",
        "sourceLine": "chain_snapshot    JSONB DEFAULT '[]'::jsonb"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'firing'",
        "sourceLine": "status            VARCHAR(32) DEFAULT 'firing'"
      },
      {
        "name": "ack_deadline",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ack_deadline      TIMESTAMPTZ"
      },
      {
        "name": "acked_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "acked_by          VARCHAR(255)"
      },
      {
        "name": "acked_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "acked_at          TIMESTAMPTZ"
      },
      {
        "name": "override_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "override_to       VARCHAR(255)"
      },
      {
        "name": "override_reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "override_reason   TEXT"
      },
      {
        "name": "overridden_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "overridden_by     VARCHAR(255)"
      },
      {
        "name": "overridden_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "overridden_at     TIMESTAMPTZ"
      },
      {
        "name": "resolved_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolved_by       VARCHAR(255)"
      },
      {
        "name": "resolved_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolved_at       TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at        TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-003-pass7-oncall-sql-oncall-policies",
    "sourceProject": "AICyberSOCCopilot",
    "name": "oncall_policies",
    "displayName": "Oncall Policies",
    "framework": "SQL",
    "sourceFile": "backend/migrations/003_pass7_oncall.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "policy_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "policy_id           VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name                VARCHAR(255) NOT NULL"
      },
      {
        "name": "chain",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'::jsonb",
        "sourceLine": "chain               JSONB DEFAULT '[]'::jsonb"
      },
      {
        "name": "ack_window_minutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "10",
        "sourceLine": "ack_window_minutes  INTEGER DEFAULT 10"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status              VARCHAR(32) DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-001-schema-sql-playbooks",
    "sourceProject": "AICyberSOCCopilot",
    "name": "playbooks",
    "displayName": "Playbooks",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id             SERIAL PRIMARY KEY"
      },
      {
        "name": "playbook_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "playbook_id    VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name           VARCHAR(255) NOT NULL"
      },
      {
        "name": "trigger",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trigger        VARCHAR(255)"
      },
      {
        "name": "steps_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "steps_count    INTEGER DEFAULT 0"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner          VARCHAR(255)"
      },
      {
        "name": "last_run",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_run       TIMESTAMPTZ"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-002-schema-extended-sql-runbooks",
    "sourceProject": "AICyberSOCCopilot",
    "name": "runbooks",
    "displayName": "Runbooks",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema_extended.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "runbook_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "runbook_id      VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(255) NOT NULL"
      },
      {
        "name": "scenario",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scenario        VARCHAR(255)"
      },
      {
        "name": "last_drill",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_drill      TIMESTAMPTZ"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner           VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status          VARCHAR(32) DEFAULT 'active'"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-002-schema-extended-sql-secrets-vault",
    "sourceProject": "AICyberSOCCopilot",
    "name": "secrets_vault",
    "displayName": "Secrets Vault",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema_extended.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "secret_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "secret_id       VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(255) NOT NULL"
      },
      {
        "name": "scope",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scope           VARCHAR(255)"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner           VARCHAR(255)"
      },
      {
        "name": "last_rotated",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_rotated    TIMESTAMPTZ"
      },
      {
        "name": "rotation_due",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rotation_due    TIMESTAMPTZ"
      },
      {
        "name": "used_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "used_by         VARCHAR(255)"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-001-schema-sql-shift-roster",
    "sourceProject": "AICyberSOCCopilot",
    "name": "shift_roster",
    "displayName": "Shift Roster",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id            SERIAL PRIMARY KEY"
      },
      {
        "name": "entry_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "entry_id      VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "analyst",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "analyst       VARCHAR(255) NOT NULL"
      },
      {
        "name": "shift",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shift         VARCHAR(50)"
      },
      {
        "name": "day_of_week",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "day_of_week   VARCHAR(20)"
      },
      {
        "name": "on_call",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "on_call       BOOLEAN DEFAULT FALSE"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-001-schema-sql-threat-intel-feed",
    "sourceProject": "AICyberSOCCopilot",
    "name": "threat_intel_feed",
    "displayName": "Threat Intel Feed",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id            SERIAL PRIMARY KEY"
      },
      {
        "name": "feed_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "feed_id       VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source        VARCHAR(255)"
      },
      {
        "name": "indicator",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "indicator     VARCHAR(500)"
      },
      {
        "name": "threat_actor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "threat_actor  VARCHAR(255)"
      },
      {
        "name": "ttp",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ttp           VARCHAR(255)"
      },
      {
        "name": "observed_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "observed_at   TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "severity      VARCHAR(20) DEFAULT 'medium'"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-002-schema-extended-sql-users",
    "sourceProject": "AICyberSOCCopilot",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema_extended.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id           SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email        VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password     VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name         VARCHAR(255)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'viewer'",
        "sourceLine": "role         VARCHAR(32) DEFAULT 'viewer'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at   TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-002-schema-extended-sql-vendor-risk",
    "sourceProject": "AICyberSOCCopilot",
    "name": "vendor_risk",
    "displayName": "Vendor Risk",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema_extended.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "vendor_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "vendor_id       VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(255) NOT NULL"
      },
      {
        "name": "tier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tier            VARCHAR(20)"
      },
      {
        "name": "soc2",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "soc2            BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "last_review",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_review     TIMESTAMPTZ"
      },
      {
        "name": "risk_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "50",
        "sourceLine": "risk_score      INTEGER DEFAULT 50"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status          VARCHAR(32) DEFAULT 'active'"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-002-schema-extended-sql-vulnerabilities",
    "sourceProject": "AICyberSOCCopilot",
    "name": "vulnerabilities",
    "displayName": "Vulnerabilities",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema_extended.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "cve",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "cve             VARCHAR(64) UNIQUE NOT NULL"
      },
      {
        "name": "cvss",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cvss            NUMERIC(3,1)"
      },
      {
        "name": "asset",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "asset           VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status          VARCHAR(32) DEFAULT 'open'"
      },
      {
        "name": "discovered_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "discovered_at   TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "patch_eta",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "patch_eta       TIMESTAMPTZ"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-002-schema-extended-sql-webhook-deliveries",
    "sourceProject": "AICyberSOCCopilot",
    "name": "webhook_deliveries",
    "displayName": "Webhook Deliveries",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema_extended.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id             SERIAL PRIMARY KEY"
      },
      {
        "name": "webhook_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "webhook_id     INTEGER"
      },
      {
        "name": "event_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_type     VARCHAR(64)"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payload        JSONB"
      },
      {
        "name": "status_code",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status_code    INTEGER"
      },
      {
        "name": "response_body",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response_body  TEXT"
      },
      {
        "name": "delivered_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "delivered_at   TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "success",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "success        BOOLEAN DEFAULT FALSE"
      }
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-backend-migrations-002-schema-extended-sql-webhooks",
    "sourceProject": "AICyberSOCCopilot",
    "name": "webhooks",
    "displayName": "Webhooks",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_schema_extended.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id           SERIAL PRIMARY KEY"
      },
      {
        "name": "url",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "url          VARCHAR(500) NOT NULL"
      },
      {
        "name": "event_types",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ARRAY[]::TEXT[]",
        "sourceLine": "event_types  TEXT[] DEFAULT ARRAY[]::TEXT[]"
      },
      {
        "name": "secret",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "secret       VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status       VARCHAR(32) DEFAULT 'active'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at   TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-ai-results",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature         VARCHAR(80) NOT NULL"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input           JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output          JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-attachments",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "attachments",
    "displayName": "Attachments",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "resource_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource_type   VARCHAR(60)"
      },
      {
        "name": "resource_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resource_id     INTEGER"
      },
      {
        "name": "filename",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "filename        VARCHAR(255)"
      },
      {
        "name": "original_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "original_name   VARCHAR(255)"
      },
      {
        "name": "mimetype",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mimetype        VARCHAR(120)"
      },
      {
        "name": "size_bytes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "size_bytes      INTEGER"
      },
      {
        "name": "uploaded_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "uploaded_by     VARCHAR(150)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-audit-log",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "audit_log",
    "displayName": "Audit Log",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "entry_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "entry_id        VARCHAR(50) UNIQUE"
      },
      {
        "name": "actor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actor           VARCHAR(120)"
      },
      {
        "name": "target",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target          VARCHAR(200)"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action          VARCHAR(80)"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result          VARCHAR(30)"
      },
      {
        "name": "ts",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ts              TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-002-apply7-sql-change-window-approvals",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "change_window_approvals",
    "displayName": "Change Window Approvals",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_apply7.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "window_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "window_id       VARCHAR(50)"
      },
      {
        "name": "approver",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approver        VARCHAR(150)"
      },
      {
        "name": "decision",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "decision        VARCHAR(20)"
      },
      {
        "name": "reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason          TEXT"
      },
      {
        "name": "decided_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "decided_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-change-windows",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "change_windows",
    "displayName": "Change Windows",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "window_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "window_id       VARCHAR(50) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(150)"
      },
      {
        "name": "start_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_at        TIMESTAMPTZ"
      },
      {
        "name": "end_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_at          TIMESTAMPTZ"
      },
      {
        "name": "scope",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scope           VARCHAR(200)"
      },
      {
        "name": "approver",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "approver        VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-control-loops",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "control_loops",
    "displayName": "Control Loops",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "loop_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "loop_id         VARCHAR(50) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(150)"
      },
      {
        "name": "asset",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "asset           VARCHAR(80)"
      },
      {
        "name": "pv_tag",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pv_tag          VARCHAR(80)"
      },
      {
        "name": "sp_tag",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sp_tag          VARCHAR(80)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'normal'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'normal'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-firmware-versions",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "firmware_versions",
    "displayName": "Firmware Versions",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "firmware_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "firmware_id     VARCHAR(50) UNIQUE"
      },
      {
        "name": "vendor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor          VARCHAR(120)"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model           VARCHAR(120)"
      },
      {
        "name": "version",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version         VARCHAR(50)"
      },
      {
        "name": "cve_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "cve_count       INTEGER DEFAULT 0"
      },
      {
        "name": "latest",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "latest          BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-hmis",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "hmis",
    "displayName": "Hmis",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                 SERIAL PRIMARY KEY"
      },
      {
        "name": "hmi_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "hmi_id             VARCHAR(50) UNIQUE"
      },
      {
        "name": "plant",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plant              VARCHAR(150)"
      },
      {
        "name": "operating_system",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "operating_system   VARCHAR(80)"
      },
      {
        "name": "version",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version            VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'online'",
        "sourceLine": "status             VARCHAR(30) DEFAULT 'online'"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner              VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at         TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at         TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-ics-alerts",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "ics_alerts",
    "displayName": "Ics Alerts",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "alert_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "alert_id        VARCHAR(50) UNIQUE"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source          VARCHAR(120)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "severity        VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "asset_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "asset_id        VARCHAR(50)"
      },
      {
        "name": "signature",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "signature       VARCHAR(200)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'open'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-ics-incidents",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "ics_incidents",
    "displayName": "Ics Incidents",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "incident_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "incident_id     VARCHAR(50) UNIQUE"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title           VARCHAR(200)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'open'"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "severity        VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "opened_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "opened_at       TIMESTAMPTZ"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner           VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-ics-iocs",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "ics_iocs",
    "displayName": "Ics Iocs",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "ioc_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "ioc_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            VARCHAR(40)"
      },
      {
        "name": "value",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "value           VARCHAR(300)"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source          VARCHAR(120)"
      },
      {
        "name": "confidence",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence      VARCHAR(20)"
      },
      {
        "name": "first_seen",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "first_seen      TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-ics-runbooks",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "ics_runbooks",
    "displayName": "Ics Runbooks",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "runbook_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "runbook_id      VARCHAR(50) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(200)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category        VARCHAR(80)"
      },
      {
        "name": "scenario",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scenario        VARCHAR(300)"
      },
      {
        "name": "version",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version         VARCHAR(30)"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner           VARCHAR(120)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-network-baselines",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "network_baselines",
    "displayName": "Network Baselines",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "baseline_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "baseline_id     VARCHAR(50) UNIQUE"
      },
      {
        "name": "zone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone            VARCHAR(120)"
      },
      {
        "name": "protocol",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "protocol        VARCHAR(40)"
      },
      {
        "name": "learned_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "learned_at      TIMESTAMPTZ"
      },
      {
        "name": "drift_pct",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "drift_pct       NUMERIC(6,2) DEFAULT 0"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'stable'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'stable'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-002-apply7-sql-network-conduits",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "network_conduits",
    "displayName": "Network Conduits",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_apply7.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "conduit_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "conduit_id      VARCHAR(50) UNIQUE"
      },
      {
        "name": "src_zone_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "src_zone_id     VARCHAR(50)"
      },
      {
        "name": "dst_zone_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dst_zone_id     VARCHAR(50)"
      },
      {
        "name": "protocols",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "protocols       TEXT"
      },
      {
        "name": "direction",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'bidirectional'",
        "sourceLine": "direction       VARCHAR(20) DEFAULT 'bidirectional'"
      },
      {
        "name": "posture",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'allow'",
        "sourceLine": "posture         VARCHAR(20) DEFAULT 'allow'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-network-zones",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "network_zones",
    "displayName": "Network Zones",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "zone_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "zone_id         VARCHAR(50) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(120)"
      },
      {
        "name": "purdue_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purdue_level    VARCHAR(20)"
      },
      {
        "name": "criticality",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "criticality     VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "gateway",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gateway         VARCHAR(80)"
      },
      {
        "name": "asset_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "asset_count     INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-notifications",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id         INTEGER"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title           VARCHAR(200)"
      },
      {
        "name": "body",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body            TEXT"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'info'",
        "sourceLine": "severity        VARCHAR(20) DEFAULT 'info'"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source          VARCHAR(80)"
      },
      {
        "name": "read_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "read_at         TIMESTAMPTZ"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-operator-actions",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "operator_actions",
    "displayName": "Operator Actions",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "action_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "action_id       VARCHAR(50) UNIQUE"
      },
      {
        "name": "operator",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "operator        VARCHAR(120)"
      },
      {
        "name": "asset",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "asset           VARCHAR(80)"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action          VARCHAR(200)"
      },
      {
        "name": "ts",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ts              TIMESTAMPTZ"
      },
      {
        "name": "justification",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "justification   TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-ot-assets",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "ot_assets",
    "displayName": "Ot Assets",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "asset_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "asset_id        VARCHAR(50) UNIQUE"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            VARCHAR(60)"
      },
      {
        "name": "vendor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor          VARCHAR(120)"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model           VARCHAR(120)"
      },
      {
        "name": "criticality",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "criticality     VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "zone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone            VARCHAR(80)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-plcs",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "plcs",
    "displayName": "Plcs",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "plc_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "plc_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "vendor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor          VARCHAR(120)"
      },
      {
        "name": "firmware",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firmware        VARCHAR(80)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location        VARCHAR(150)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'online'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'online'"
      },
      {
        "name": "last_patch",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_patch      DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-protocol-anomalies",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "protocol_anomalies",
    "displayName": "Protocol Anomalies",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id                  SERIAL PRIMARY KEY"
      },
      {
        "name": "anomaly_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "anomaly_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "protocol",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "protocol            VARCHAR(40)"
      },
      {
        "name": "src_asset",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "src_asset           VARCHAR(80)"
      },
      {
        "name": "dst_asset",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dst_asset           VARCHAR(80)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type                VARCHAR(80)"
      },
      {
        "name": "baseline_deviation",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "baseline_deviation  NUMERIC(7,2) DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at          TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at          TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-safety-systems",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "safety_systems",
    "displayName": "Safety Systems",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "sis_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "sis_id          VARCHAR(50) UNIQUE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(150)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type            VARCHAR(60)"
      },
      {
        "name": "sil_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sil_level       VARCHAR(10)"
      },
      {
        "name": "last_test",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_test       DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'healthy'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'healthy'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-scada-servers",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "scada_servers",
    "displayName": "Scada Servers",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "server_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "server_id       VARCHAR(50) UNIQUE"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role            VARCHAR(60)"
      },
      {
        "name": "version",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version         VARCHAR(50)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location        VARCHAR(150)"
      },
      {
        "name": "redundancy",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "redundancy      VARCHAR(40)"
      },
      {
        "name": "last_backup",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_backup     DATE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-002-apply7-sql-sis-audit-entries",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "sis_audit_entries",
    "displayName": "Sis Audit Entries",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_apply7.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "entry_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "entry_id        VARCHAR(50) UNIQUE"
      },
      {
        "name": "sis_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sis_id          VARCHAR(50)"
      },
      {
        "name": "entry_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entry_type      VARCHAR(40)"
      },
      {
        "name": "sil_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sil_level       VARCHAR(10)"
      },
      {
        "name": "performed_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "performed_by    VARCHAR(150)"
      },
      {
        "name": "performed_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "performed_at    TIMESTAMPTZ"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result          VARCHAR(40)"
      },
      {
        "name": "next_due_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_due_at    TIMESTAMPTZ"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes           TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-users",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email           VARCHAR(150) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password        VARCHAR(120) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(120)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'viewer'",
        "sourceLine": "role            VARCHAR(20) DEFAULT 'viewer'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-002-apply7-sql-vendor-advisories",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "vendor_advisories",
    "displayName": "Vendor Advisories",
    "framework": "SQL",
    "sourceFile": "backend/migrations/002_apply7.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "advisory_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "advisory_id     VARCHAR(80) UNIQUE"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source          VARCHAR(60)"
      },
      {
        "name": "vendor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor          VARCHAR(120)"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title           VARCHAR(300)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "severity        VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "cve_ids",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cve_ids         TEXT"
      },
      {
        "name": "affected",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "affected        TEXT"
      },
      {
        "name": "url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "url             VARCHAR(500)"
      },
      {
        "name": "published_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "published_at    TIMESTAMPTZ"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'new'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'new'"
      },
      {
        "name": "promoted_patch_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "promoted_patch_id VARCHAR(50)"
      },
      {
        "name": "raw",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "raw             JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-vendor-patches",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "vendor_patches",
    "displayName": "Vendor Patches",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "patch_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "patch_id        VARCHAR(50) UNIQUE"
      },
      {
        "name": "vendor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor          VARCHAR(120)"
      },
      {
        "name": "advisory",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "advisory        VARCHAR(200)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "severity        VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "affected_models",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "affected_models VARCHAR(300)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status          VARCHAR(30) DEFAULT 'pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-webhook-deliveries",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "webhook_deliveries",
    "displayName": "Webhook Deliveries",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "webhook_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "webhook_id      INTEGER"
      },
      {
        "name": "event",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event           VARCHAR(120)"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payload         JSONB"
      },
      {
        "name": "status_code",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status_code     INTEGER"
      },
      {
        "name": "response_body",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response_body   TEXT"
      },
      {
        "name": "attempted_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "attempted_at    TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-backend-migrations-001-schema-sql-webhooks",
    "sourceProject": "AIOTSecOpsForICS",
    "name": "webhooks",
    "displayName": "Webhooks",
    "framework": "SQL",
    "sourceFile": "backend/migrations/001_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id              SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name            VARCHAR(120)"
      },
      {
        "name": "url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "url             VARCHAR(500)"
      },
      {
        "name": "secret",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "secret          VARCHAR(120)"
      },
      {
        "name": "events",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "events          TEXT"
      },
      {
        "name": "active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "active          BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at      TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at      TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-alerting-rule-matches",
    "sourceProject": "security_detection",
    "name": "alerting_rule_matches",
    "displayName": "Alerting Rule Matches",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "rule_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rule_id UUID REFERENCES security.alerting_rules(id) ON DELETE CASCADE"
      },
      {
        "name": "matched_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "matched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "matched_events",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "matched_events JSONB"
      },
      {
        "name": "details",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details TEXT"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-alerting-rules",
    "sourceProject": "security_detection",
    "name": "alerting_rules",
    "displayName": "Alerting Rules",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "conditions",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "conditions JSONB NOT NULL"
      },
      {
        "name": "threshold",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "threshold INTEGER DEFAULT 1"
      },
      {
        "name": "window_seconds",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "300",
        "sourceLine": "window_seconds INTEGER DEFAULT 300"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(20) CHECK (severity IN ('critical', 'high', 'medium', 'low'))"
      },
      {
        "name": "actions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "actions JSONB DEFAULT '[]'"
      },
      {
        "name": "enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "enabled BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "last_triggered_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_triggered_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-seed-comprehensive-data-sql-alerts",
    "sourceProject": "security_detection",
    "name": "alerts",
    "displayName": "Alerts",
    "framework": "SQL",
    "sourceFile": "scripts/setup/seed_comprehensive_data.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "severity VARCHAR(20) NOT NULL DEFAULT 'medium'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'new'",
        "sourceLine": "status VARCHAR(20) NOT NULL DEFAULT 'new'"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source VARCHAR(100)"
      },
      {
        "name": "event_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_id UUID REFERENCES security.events(id)"
      },
      {
        "name": "assigned_to",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to UUID REFERENCES users(id)"
      },
      {
        "name": "acknowledged_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "acknowledged_at TIMESTAMP"
      },
      {
        "name": "resolved_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "resolved_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-seed-comprehensive-data-sql-compliance-controls",
    "sourceProject": "security_detection",
    "name": "compliance_controls",
    "displayName": "Compliance Controls",
    "framework": "SQL",
    "sourceFile": "scripts/setup/seed_comprehensive_data.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "framework",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "framework VARCHAR(50) NOT NULL"
      },
      {
        "name": "control_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "control_id VARCHAR(50) NOT NULL"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'not_tested'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'not_tested'"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "severity VARCHAR(20) DEFAULT 'medium'"
      },
      {
        "name": "last_tested",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_tested TIMESTAMP"
      },
      {
        "name": "evidence",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "evidence TEXT[]"
      },
      {
        "name": "remediation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "remediation TEXT"
      },
      {
        "name": "owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-correlation-matches",
    "sourceProject": "security_detection",
    "name": "correlation_matches",
    "displayName": "Correlation Matches",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "rule_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rule_id UUID REFERENCES security.correlation_rules(id) ON DELETE CASCADE"
      },
      {
        "name": "matched_events",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "matched_events JSONB"
      },
      {
        "name": "matched_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "matched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "details",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details TEXT"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-correlation-rules",
    "sourceProject": "security_detection",
    "name": "correlation_rules",
    "displayName": "Correlation Rules",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "event_sequence",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_sequence JSONB NOT NULL"
      },
      {
        "name": "window_seconds",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "300",
        "sourceLine": "window_seconds INTEGER DEFAULT 300"
      },
      {
        "name": "threshold",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "threshold INTEGER DEFAULT 1"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(20) CHECK (severity IN ('critical', 'high', 'medium', 'low'))"
      },
      {
        "name": "enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "enabled BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "last_triggered_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_triggered_at TIMESTAMP"
      },
      {
        "name": "trigger_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "trigger_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-custom-detection-rules",
    "sourceProject": "security_detection",
    "name": "custom_detection_rules",
    "displayName": "Custom Detection Rules",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "conditions",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "conditions JSONB NOT NULL"
      },
      {
        "name": "logic_operator",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'AND'",
        "sourceLine": "logic_operator VARCHAR(5) DEFAULT 'AND' CHECK (logic_operator IN ('AND', 'OR'))"
      },
      {
        "name": "actions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'[]'",
        "sourceLine": "actions JSONB DEFAULT '[]'"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(20) CHECK (severity IN ('critical', 'high', 'medium', 'low'))"
      },
      {
        "name": "enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "enabled BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "last_triggered_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_triggered_at TIMESTAMP"
      },
      {
        "name": "trigger_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "trigger_count INTEGER DEFAULT 0"
      },
      {
        "name": "created_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-hunt-findings",
    "sourceProject": "security_detection",
    "name": "hunt_findings",
    "displayName": "Hunt Findings",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "hunt_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hunt_id UUID REFERENCES security.hunt_hypotheses(id) ON DELETE CASCADE"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(500) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "evidence",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "evidence JSONB DEFAULT '{}'"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(20) CHECK (severity IN ('critical', 'high', 'medium', 'low'))"
      },
      {
        "name": "source_event_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_event_id UUID"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-hunt-hypotheses",
    "sourceProject": "security_detection",
    "name": "hunt_hypotheses",
    "displayName": "Hunt Hypotheses",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(500) NOT NULL"
      },
      {
        "name": "hypothesis",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hypothesis TEXT NOT NULL"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'validated', 'invalidated', 'closed'))"
      },
      {
        "name": "mitre_tactic",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mitre_tactic VARCHAR(100)"
      },
      {
        "name": "mitre_technique",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mitre_technique VARCHAR(100)"
      },
      {
        "name": "created_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "created_by VARCHAR(255)"
      },
      {
        "name": "assigned_to",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assigned_to VARCHAR(255)"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority VARCHAR(20) DEFAULT 'medium' CHECK (priority IN ('critical', 'high', 'medium', 'low'))"
      },
      {
        "name": "findings_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "findings_count INTEGER DEFAULT 0"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-ioc-sweep-results",
    "sourceProject": "security_detection",
    "name": "ioc_sweep_results",
    "displayName": "Ioc Sweep Results",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "sweep_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sweep_id UUID REFERENCES security.ioc_sweeps(id) ON DELETE CASCADE"
      },
      {
        "name": "ioc_value",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ioc_value VARCHAR(500) NOT NULL"
      },
      {
        "name": "ioc_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ioc_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "matched_log_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "matched_log_id UUID REFERENCES security.normalized_logs(id) ON DELETE SET NULL"
      },
      {
        "name": "matched_field",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "matched_field VARCHAR(100)"
      },
      {
        "name": "context",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "context TEXT"
      },
      {
        "name": "matched_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "matched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-ioc-sweeps",
    "sourceProject": "security_detection",
    "name": "ioc_sweeps",
    "displayName": "Ioc Sweeps",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'running', 'completed', 'failed'))"
      },
      {
        "name": "ioc_list",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ioc_list JSONB NOT NULL"
      },
      {
        "name": "time_range_start",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "time_range_start TIMESTAMP"
      },
      {
        "name": "time_range_end",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "time_range_end TIMESTAMP"
      },
      {
        "name": "results_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "results_count INTEGER DEFAULT 0"
      },
      {
        "name": "started_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "started_at TIMESTAMP"
      },
      {
        "name": "completed_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-kill-chain-events",
    "sourceProject": "security_detection",
    "name": "kill_chain_events",
    "displayName": "Kill Chain Events",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "chain_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "chain_id UUID REFERENCES security.kill_chains(id) ON DELETE CASCADE"
      },
      {
        "name": "phase",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phase VARCHAR(50) NOT NULL CHECK (phase IN ('reconnaissance', 'weaponization', 'delivery', 'exploitation', 'installation', 'command_and_control', 'actions_on_objectives'))"
      },
      {
        "name": "event_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_id UUID"
      },
      {
        "name": "event_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event_type VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "timestamp",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timestamp TIMESTAMP"
      },
      {
        "name": "sequence_order",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sequence_order INTEGER"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-kill-chains",
    "sourceProject": "security_detection",
    "name": "kill_chains",
    "displayName": "Kill Chains",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "src_ip",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "src_ip VARCHAR(45)"
      },
      {
        "name": "related_incident_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "related_incident_id UUID"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'detected'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'detected' CHECK (status IN ('detected', 'investigating', 'confirmed', 'mitigated'))"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-log-retention-policies",
    "sourceProject": "security_detection",
    "name": "log_retention_policies",
    "displayName": "Log Retention Policies",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "source_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "retention_days",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "90",
        "sourceLine": "retention_days INTEGER NOT NULL DEFAULT 90"
      },
      {
        "name": "archive_enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "archive_enabled BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "archive_location",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "archive_location TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-log-sources",
    "sourceProject": "security_detection",
    "name": "log_sources",
    "displayName": "Log Sources",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "source_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_type VARCHAR(50) NOT NULL CHECK (source_type IN ('firewall', 'endpoint', 'cloud', 'iam', 'dns', 'email', 'proxy', 'custom'))"
      },
      {
        "name": "format",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "format VARCHAR(20) NOT NULL CHECK (format IN ('syslog', 'cef', 'leef', 'json'))"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "host",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "host VARCHAR(255)"
      },
      {
        "name": "port",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "port INTEGER"
      },
      {
        "name": "enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "enabled BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "last_seen_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_seen_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-backend-nodejs-src-workflow-entities-threat-intel-entity-ts-mitre-attack-techniques",
    "sourceProject": "security_detection",
    "name": "mitre_attack_techniques",
    "displayName": "Mitre Attack Techniques",
    "framework": "TypeORM",
    "sourceFile": "backend/nodejs/src/workflow/entities/threat-intel.entity.ts",
    "columns": [
      {
        "name": "id",
        "type": "string",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@PrimaryGeneratedColumn('uuid')\n  id: string"
      },
      {
        "name": "technique_id",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 20 })\n  @Index()\n  technique_id: string"
      },
      {
        "name": "name",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 500 })\n  name: string"
      },
      {
        "name": "description",
        "type": "text",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'text' })\n  description: string"
      },
      {
        "name": "tactics",
        "type": "json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json' })\n  tactics: string[]"
      },
      {
        "name": "kill_chain_phase",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 50 })\n  kill_chain_phase: string"
      },
      {
        "name": "mitigations",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  mitigations: string[]"
      },
      {
        "name": "data_sources",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  data_sources: string[]"
      },
      {
        "name": "is_active",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true }",
        "sourceLine": "@Column({ default: true })\n  is_active: boolean"
      },
      {
        "name": "tenant_id",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid')\n  tenant_id: string"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-mitre-mappings",
    "sourceProject": "security_detection",
    "name": "mitre_mappings",
    "displayName": "Mitre Mappings",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "detection_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "detection_type VARCHAR(255)"
      },
      {
        "name": "detection_rule_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "detection_rule_id UUID"
      },
      {
        "name": "detection_event_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "detection_event_id VARCHAR(255)"
      },
      {
        "name": "tactic_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tactic_id VARCHAR(20) NOT NULL"
      },
      {
        "name": "tactic_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tactic_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "technique_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technique_id VARCHAR(20) NOT NULL"
      },
      {
        "name": "technique_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technique_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "sub_technique_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sub_technique_id VARCHAR(20)"
      },
      {
        "name": "sub_technique_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sub_technique_name VARCHAR(255)"
      },
      {
        "name": "confidence",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "confidence VARCHAR(20) DEFAULT 'medium' CHECK (confidence IN ('high', 'medium', 'low'))"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-normalized-logs",
    "sourceProject": "security_detection",
    "name": "normalized_logs",
    "displayName": "Normalized Logs",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "raw_log_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "raw_log_id UUID REFERENCES security.raw_logs(id) ON DELETE SET NULL"
      },
      {
        "name": "timestamp",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timestamp TIMESTAMP NOT NULL"
      },
      {
        "name": "source_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_type VARCHAR(50)"
      },
      {
        "name": "source_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_name VARCHAR(255)"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(255)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(20) CHECK (severity IN ('critical', 'high', 'medium', 'low', 'info'))"
      },
      {
        "name": "src_ip",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "src_ip VARCHAR(45)"
      },
      {
        "name": "dst_ip",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dst_ip VARCHAR(45)"
      },
      {
        "name": "src_port",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "src_port INTEGER"
      },
      {
        "name": "dst_port",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dst_port INTEGER"
      },
      {
        "name": "protocol",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "protocol VARCHAR(20)"
      },
      {
        "name": "username",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "username VARCHAR(255)"
      },
      {
        "name": "hostname",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hostname VARCHAR(255)"
      },
      {
        "name": "message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "message TEXT"
      },
      {
        "name": "extra_fields",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "extra_fields JSONB DEFAULT '{}'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-raw-logs",
    "sourceProject": "security_detection",
    "name": "raw_logs",
    "displayName": "Raw Logs",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "source_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source_id UUID REFERENCES security.log_sources(id) ON DELETE SET NULL"
      },
      {
        "name": "format",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "format VARCHAR(20) NOT NULL"
      },
      {
        "name": "raw_content",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "raw_content TEXT NOT NULL"
      },
      {
        "name": "received_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "received_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "processed",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "processed BOOLEAN DEFAULT FALSE"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-sigma-rules",
    "sourceProject": "security_detection",
    "name": "sigma_rules",
    "displayName": "Sigma Rules",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(500) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "yaml_content",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "yaml_content TEXT NOT NULL"
      },
      {
        "name": "parsed_logic",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parsed_logic JSONB"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'testing'",
        "sourceLine": "status VARCHAR(20) DEFAULT 'testing' CHECK (status IN ('active', 'testing', 'disabled'))"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(20) CHECK (severity IN ('critical', 'high', 'medium', 'low'))"
      },
      {
        "name": "logsource_category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "logsource_category VARCHAR(100)"
      },
      {
        "name": "logsource_product",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "logsource_product VARCHAR(100)"
      },
      {
        "name": "tags",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags TEXT[]"
      },
      {
        "name": "author",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "author VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-backend-nodejs-src-auth-entities-tenant-settings-entity-ts-tenant-settings",
    "sourceProject": "security_detection",
    "name": "tenant_settings",
    "displayName": "Tenant Settings",
    "framework": "TypeORM",
    "sourceFile": "backend/nodejs/src/auth/entities/tenant-settings.entity.ts",
    "columns": [
      {
        "name": "id",
        "type": "string",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@PrimaryGeneratedColumn('uuid')\n  id: string"
      },
      {
        "name": "key",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 100 })\n  key: string"
      },
      {
        "name": "value",
        "type": "text",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'text' })\n  value: string"
      },
      {
        "name": "type",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'string'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['string', 'number', 'boolean', 'json'],\n    default: 'string'\n  })\n  type: string"
      },
      {
        "name": "description",
        "type": "text",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'text', nullable: true })\n  description: string"
      },
      {
        "name": "is_encrypted",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false }",
        "sourceLine": "@Column({ default: false })\n  is_encrypted: boolean"
      },
      {
        "name": "is_active",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true }",
        "sourceLine": "@Column({ default: true })\n  is_active: boolean"
      },
      {
        "name": "tenant_id",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid')\n  tenant_id: string"
      }
    ]
  },
  {
    "id": "security-detection-backend-nodejs-src-auth-entities-tenant-entity-ts-tenants",
    "sourceProject": "security_detection",
    "name": "tenants",
    "displayName": "Tenants",
    "framework": "TypeORM",
    "sourceFile": "backend/nodejs/src/auth/entities/tenant.entity.ts",
    "columns": [
      {
        "name": "id",
        "type": "string",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@PrimaryGeneratedColumn('uuid')\n  id: string"
      },
      {
        "name": "name",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 100, unique: true })\n  name: string"
      },
      {
        "name": "subdomain",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 50, unique: true })\n  subdomain: string"
      },
      {
        "name": "domain",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 255, nullable: true, unique: true })\n  domain: string"
      },
      {
        "name": "description",
        "type": "text",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'text', nullable: true })\n  description: string"
      },
      {
        "name": "plan",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'trial'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['trial', 'starter', 'professional', 'enterprise'],\n    default: 'trial'\n  })\n  plan: string"
      },
      {
        "name": "status",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['active', 'suspended', 'cancelled', 'pending'],\n    default: 'pending'\n  })\n  status: string"
      },
      {
        "name": "billing_info",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  billing_info: {"
      },
      {
        "name": "features",
        "type": "json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json' })\n  features: {"
      },
      {
        "name": "usage_limits",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  usage_limits: {"
      },
      {
        "name": "integrations",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  integrations: {"
      },
      {
        "name": "trial_ends_at",
        "type": "timestamp",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'timestamp', nullable: true })\n  trial_ends_at: Date"
      },
      {
        "name": "subscription_ends_at",
        "type": "timestamp",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'timestamp', nullable: true })\n  subscription_ends_at: Date"
      },
      {
        "name": "logo_url",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 255, nullable: true })\n  logo_url: string"
      },
      {
        "name": "branding",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  branding: {"
      },
      {
        "name": "is_active",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true }",
        "sourceLine": "@Column({ default: true })\n  is_active: boolean"
      }
    ]
  },
  {
    "id": "security-detection-backend-nodejs-src-workflow-entities-threat-intel-entity-ts-threat-intel-sources",
    "sourceProject": "security_detection",
    "name": "threat_intel_sources",
    "displayName": "Threat Intel Sources",
    "framework": "TypeORM",
    "sourceFile": "backend/nodejs/src/workflow/entities/threat-intel.entity.ts",
    "columns": [
      {
        "name": "id",
        "type": "string",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@PrimaryGeneratedColumn('uuid')\n  id: string"
      },
      {
        "name": "name",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 100 })\n  name: string"
      },
      {
        "name": "description",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 500 })\n  description: string"
      },
      {
        "name": "api_endpoint",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 500, nullable: true })\n  api_endpoint: string"
      },
      {
        "name": "api_key_name",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 500, nullable: true })\n  api_key_name: string"
      },
      {
        "name": "supported_indicators",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  supported_indicators: string[]"
      },
      {
        "name": "reliability_score",
        "type": "decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.5 }",
        "sourceLine": "@Column({ type: 'decimal', precision: 3, scale: 2, default: 0.5 })\n  reliability_score: number"
      },
      {
        "name": "timeout_ms",
        "type": "number",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "5000 }",
        "sourceLine": "@Column({ default: 5000 })\n  timeout_ms: number"
      },
      {
        "name": "rate_limit_ms",
        "type": "number",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1000 }",
        "sourceLine": "@Column({ default: 1000 })\n  rate_limit_ms: number"
      },
      {
        "name": "is_enabled",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true }",
        "sourceLine": "@Column({ default: true })\n  is_enabled: boolean"
      },
      {
        "name": "tenant_id",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid')\n  tenant_id: string"
      }
    ]
  },
  {
    "id": "security-detection-backend-nodejs-src-workflow-entities-threat-intel-entity-ts-threat-intelligence",
    "sourceProject": "security_detection",
    "name": "threat_intelligence",
    "displayName": "Threat Intelligence",
    "framework": "TypeORM",
    "sourceFile": "backend/nodejs/src/workflow/entities/threat-intel.entity.ts",
    "columns": [
      {
        "name": "id",
        "type": "string",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@PrimaryGeneratedColumn('uuid')\n  id: string"
      },
      {
        "name": "indicator_value",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 500 })\n  @Index()\n  indicator_value: string"
      },
      {
        "name": "indicator_type",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'ip'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['ip', 'domain', 'hash', 'url', 'email'],\n    default: 'ip'\n  })\n  indicator_type: string"
      },
      {
        "name": "reputation",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'unknown'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['clean', 'suspicious', 'malicious', 'unknown'],\n    default: 'unknown'\n  })\n  reputation: string"
      },
      {
        "name": "confidence",
        "type": "decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.0 }",
        "sourceLine": "@Column({ type: 'decimal', precision: 3, scale: 2, default: 0.0 })\n  confidence: number"
      },
      {
        "name": "sources",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  sources: string[]"
      },
      {
        "name": "malware_families",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  malware_families: string[]"
      },
      {
        "name": "threat_actors",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  threat_actors: string[]"
      },
      {
        "name": "geo_location",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  geo_location: {"
      },
      {
        "name": "external_references",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  external_references: {"
      },
      {
        "name": "description",
        "type": "text",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'text', nullable: true })\n  description: string"
      },
      {
        "name": "tags",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  tags: string[]"
      },
      {
        "name": "first_seen",
        "type": "timestamp",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'timestamp', nullable: true })\n  first_seen: Date"
      },
      {
        "name": "last_seen",
        "type": "timestamp",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "() => 'CURRENT_TIMESTAMP' })",
        "sourceLine": "@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })\n  @Index()\n  last_seen: Date"
      },
      {
        "name": "expires_at",
        "type": "timestamp",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'timestamp', nullable: true })\n  expires_at: Date"
      },
      {
        "name": "is_active",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true }",
        "sourceLine": "@Column({ default: true })\n  is_active: boolean"
      },
      {
        "name": "tenant_id",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid')\n  tenant_id: string"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-ueba-anomalies",
    "sourceProject": "security_detection",
    "name": "ueba_anomalies",
    "displayName": "Ueba Anomalies",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "entity_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id VARCHAR(255) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(50) NOT NULL"
      },
      {
        "name": "anomaly_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "anomaly_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "score",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "score FLOAT NOT NULL"
      },
      {
        "name": "deviation",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deviation FLOAT"
      },
      {
        "name": "details",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "details JSONB DEFAULT '{}'"
      },
      {
        "name": "baseline_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "baseline_id UUID REFERENCES security.ueba_baselines(id) ON DELETE SET NULL"
      },
      {
        "name": "detected_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "detected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "acknowledged",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "acknowledged BOOLEAN DEFAULT FALSE"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-ueba-baselines",
    "sourceProject": "security_detection",
    "name": "ueba_baselines",
    "displayName": "Ueba Baselines",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "entity_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id VARCHAR(255) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(50) NOT NULL CHECK (entity_type IN ('user', 'host', 'service', 'application'))"
      },
      {
        "name": "baseline_data",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "baseline_data JSONB NOT NULL DEFAULT '{}'"
      },
      {
        "name": "sample_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "sample_count INTEGER DEFAULT 0"
      },
      {
        "name": "last_updated",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-backend-nodejs-src-auth-entities-user-entity-ts-users",
    "sourceProject": "security_detection",
    "name": "users",
    "displayName": "Users",
    "framework": "TypeORM",
    "sourceFile": "backend/nodejs/src/auth/entities/user.entity.ts",
    "columns": [
      {
        "name": "id",
        "type": "string",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@PrimaryGeneratedColumn('uuid')\n  id: string"
      },
      {
        "name": "email",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 255, unique: true })\n  email: string"
      },
      {
        "name": "first_name",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 100 })\n  first_name: string"
      },
      {
        "name": "last_name",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 100 })\n  last_name: string"
      },
      {
        "name": "password_hash",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 255 })\n  password_hash: string"
      },
      {
        "name": "role",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'viewer'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['super_admin', 'tenant_admin', 'analyst', 'viewer'],\n    default: 'viewer'\n  })\n  role: string"
      },
      {
        "name": "status",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['active', 'inactive', 'pending', 'suspended'],\n    default: 'pending'\n  })\n  status: string"
      },
      {
        "name": "permissions",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  permissions: {"
      },
      {
        "name": "preferences",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  preferences: {"
      },
      {
        "name": "last_login_at",
        "type": "timestamp",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'timestamp', nullable: true })\n  last_login_at: Date"
      },
      {
        "name": "last_login_ip",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 45, nullable: true })\n  last_login_ip: string"
      },
      {
        "name": "email_verified_at",
        "type": "timestamp",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'timestamp', nullable: true })\n  email_verified_at: Date"
      },
      {
        "name": "email_verification_token",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 255, nullable: true })\n  email_verification_token: string"
      },
      {
        "name": "password_reset_token",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 255, nullable: true })\n  password_reset_token: string"
      },
      {
        "name": "password_reset_expires_at",
        "type": "timestamp",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'timestamp', nullable: true })\n  password_reset_expires_at: Date"
      },
      {
        "name": "mfa_settings",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  mfa_settings: {"
      },
      {
        "name": "is_active",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true }",
        "sourceLine": "@Column({ default: true })\n  is_active: boolean"
      },
      {
        "name": "tenant_id",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid', { nullable: true })\n  tenant_id: string"
      }
    ]
  },
  {
    "id": "security-detection-backend-nodejs-src-workflow-entities-workflow-template-entity-ts-workflow-templates",
    "sourceProject": "security_detection",
    "name": "workflow_templates",
    "displayName": "Workflow Templates",
    "framework": "TypeORM",
    "sourceFile": "backend/nodejs/src/workflow/entities/workflow-template.entity.ts",
    "columns": [
      {
        "name": "id",
        "type": "string",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@PrimaryGeneratedColumn('uuid')\n  id: string"
      },
      {
        "name": "name",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 200 })\n  name: string"
      },
      {
        "name": "description",
        "type": "text",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'text' })\n  description: string"
      },
      {
        "name": "category",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'incident-response'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['incident-response', 'threat-hunting', 'vulnerability-management', 'compliance', 'forensics', 'monitoring'],\n    default: 'incident-response'\n  })\n  category: string"
      },
      {
        "name": "workflow_definition",
        "type": "json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json' })\n  workflow_definition: {"
      },
      {
        "name": "default_config",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  default_config: Record<string, any>"
      },
      {
        "name": "tags",
        "type": "json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json' })\n  tags: string[]"
      },
      {
        "name": "complexity",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'intermediate'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['beginner', 'intermediate', 'advanced'],\n    default: 'intermediate'\n  })\n  complexity: string"
      },
      {
        "name": "estimated_time",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 100, nullable: true })\n  estimated_time: string"
      },
      {
        "name": "author",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 100, nullable: true })\n  author: string"
      },
      {
        "name": "usage_count",
        "type": "number",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0 }",
        "sourceLine": "@Column({ default: 0 })\n  usage_count: number"
      },
      {
        "name": "rating",
        "type": "decimal",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0.0 }",
        "sourceLine": "@Column({ type: 'decimal', precision: 3, scale: 2, default: 0.0 })\n  rating: number"
      },
      {
        "name": "rating_count",
        "type": "number",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0 }",
        "sourceLine": "@Column({ default: 0 })\n  rating_count: number"
      },
      {
        "name": "is_active",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true }",
        "sourceLine": "@Column({ default: true })\n  is_active: boolean"
      },
      {
        "name": "is_featured",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false }",
        "sourceLine": "@Column({ default: false })\n  is_featured: boolean"
      },
      {
        "name": "is_enterprise",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false }",
        "sourceLine": "@Column({ default: false })\n  is_enterprise: boolean"
      },
      {
        "name": "tenant_id",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid')\n  tenant_id: string"
      },
      {
        "name": "created_by",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid', { nullable: true })\n  created_by: string"
      },
      {
        "name": "updated_by",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid', { nullable: true })\n  updated_by: string"
      }
    ]
  },
  {
    "id": "security-detection-backend-nodejs-src-workflow-entities-workflow-entity-ts-workflows",
    "sourceProject": "security_detection",
    "name": "workflows",
    "displayName": "Workflows",
    "framework": "TypeORM",
    "sourceFile": "backend/nodejs/src/workflow/entities/workflow.entity.ts",
    "columns": [
      {
        "name": "id",
        "type": "string",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@PrimaryGeneratedColumn('uuid')\n  id: string"
      },
      {
        "name": "name",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ length: 200 })\n  name: string"
      },
      {
        "name": "description",
        "type": "text",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'text', nullable: true })\n  description: string"
      },
      {
        "name": "workflow_data",
        "type": "json",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json' })\n  workflow_data: {"
      },
      {
        "name": "status",
        "type": "enum",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "@Column({ \n    type: 'enum',\n    enum: ['draft', 'active', 'paused', 'archived'],\n    default: 'draft'\n  })\n  status: string"
      },
      {
        "name": "tags",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  tags: string[]"
      },
      {
        "name": "trigger_config",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  trigger_config: {"
      },
      {
        "name": "execution_stats",
        "type": "json",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'json', nullable: true })\n  execution_stats: {"
      },
      {
        "name": "version",
        "type": "number",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0 }",
        "sourceLine": "@Column({ default: 0 })\n  version: number"
      },
      {
        "name": "parent_workflow_id",
        "type": "uuid",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column({ type: 'uuid', nullable: true })\n  parent_workflow_id: string"
      },
      {
        "name": "is_active",
        "type": "boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true }",
        "sourceLine": "@Column({ default: true })\n  is_active: boolean"
      },
      {
        "name": "tenant_id",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid')\n  tenant_id: string"
      },
      {
        "name": "created_by",
        "type": "string",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid')\n  created_by: string"
      },
      {
        "name": "updated_by",
        "type": "string",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "@Column('uuid', { nullable: true })\n  updated_by: string"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-yara-rules",
    "sourceProject": "security_detection",
    "name": "yara_rules",
    "displayName": "Yara Rules",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "rule_content",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rule_content TEXT NOT NULL"
      },
      {
        "name": "tags",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags TEXT[]"
      },
      {
        "name": "enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "TRUE",
        "sourceLine": "enabled BOOLEAN DEFAULT TRUE"
      },
      {
        "name": "compiled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "compiled BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "scan_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "scan_count INTEGER DEFAULT 0"
      },
      {
        "name": "last_scanned_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_scanned_at TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "security-detection-scripts-setup-siem-threat-hunting-schema-sql-yara-scan-results",
    "sourceProject": "security_detection",
    "name": "yara_scan_results",
    "displayName": "Yara Scan Results",
    "framework": "SQL",
    "sourceFile": "scripts/setup/siem_threat_hunting_schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid_generate_v4()",
        "sourceLine": "id UUID PRIMARY KEY DEFAULT uuid_generate_v4()"
      },
      {
        "name": "rule_id",
        "type": "UUID",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rule_id UUID REFERENCES security.yara_rules(id) ON DELETE CASCADE"
      },
      {
        "name": "target",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target VARCHAR(500)"
      },
      {
        "name": "matched",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "FALSE",
        "sourceLine": "matched BOOLEAN DEFAULT FALSE"
      },
      {
        "name": "match_details",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'",
        "sourceLine": "match_details JSONB DEFAULT '{}'"
      },
      {
        "name": "scanned_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "scanned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  }
];
