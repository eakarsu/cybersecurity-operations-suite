export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "ai-cyber-soc-copilot-ai-breach-narrative-page-2pks7p-exact-ai": [
    {
      "name": "incident_notes",
      "label": "Incident Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBreachNarrativePage.js"
    },
    {
      "name": "incident_title",
      "label": "Incident Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBreachNarrativePage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-build-hunt-page-k2g01n-exact-ai": [
    {
      "name": "data_sources_csv",
      "label": "Data Sources Csv",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBuildHuntPage.js"
    },
    {
      "name": "environment",
      "label": "Environment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBuildHuntPage.js"
    },
    {
      "name": "hypothesis",
      "label": "Hypothesis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBuildHuntPage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-compromise-assess-page-m0d29c-exact-ai": [
    {
      "name": "asset_hostname",
      "label": "Asset Hostname",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICompromiseAssessPage.js"
    },
    {
      "name": "asset_notes",
      "label": "Asset Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICompromiseAssessPage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-draft-playbook-page-iiacwy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Draft Playbook Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftPlaybookPage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-enrich-ioc-page-1wrwf9-exact-ai": [
    {
      "name": "source",
      "label": "Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEnrichIocPage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-executive-brief-page-7pgscw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Executive Brief Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIExecutiveBriefPage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-false-positive-reducer-page-1ue99t-exact-ai": [
    {
      "name": "alert_notes",
      "label": "Alert Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFalsePositiveReducerPage.js"
    },
    {
      "name": "alert_title",
      "label": "Alert Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFalsePositiveReducerPage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-identity-risk-page-highun-exact-ai": [
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIdentityRiskPage.js"
    },
    {
      "name": "user_notes",
      "label": "User Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIdentityRiskPage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-log-anomaly-page-96yelz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Log Anomaly Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILogAnomalyPage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-log-query-copilot-page-dnq6sm-exact-ai": [
    {
      "name": "intent",
      "label": "Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILogQueryCopilotPage.js"
    },
    {
      "name": "platform",
      "label": "Platform",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILogQueryCopilotPage.js"
    },
    {
      "name": "schema_hints",
      "label": "Schema Hints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILogQueryCopilotPage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-phishing-classifier-page-1jii09-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Phishing Classifier Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPhishingClassifierPage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-playbook-recommend-page-1cvixu-exact-ai": [
    {
      "name": "incident_notes",
      "label": "Incident Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPlaybookRecommendPage.js"
    },
    {
      "name": "incident_title",
      "label": "Incident Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPlaybookRecommendPage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-policy-diff-page-2deypz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Policy Diff Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPolicyDiffPage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-post-incident-report-page-1xly1a-exact-ai": [
    {
      "name": "incident_title",
      "label": "Incident Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPostIncidentReportPage.js"
    },
    {
      "name": "timeline_notes",
      "label": "Timeline Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPostIncidentReportPage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-red-team-page-at54pw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Red Team Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRedTeamPage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-remediation-estimator-page-1kknij-exact-ai": [
    {
      "name": "incident_notes",
      "label": "Incident Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRemediationEstimatorPage.js"
    },
    {
      "name": "incident_severity",
      "label": "Incident Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRemediationEstimatorPage.js"
    },
    {
      "name": "incident_title",
      "label": "Incident Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRemediationEstimatorPage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-shift-handover-page-19zua9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Shift Handover Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIShiftHandoverPage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-supply-chain-scan-page-1xqbii-exact-ai": [
    {
      "name": "vendor_name",
      "label": "Vendor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISupplyChainScanPage.js"
    },
    {
      "name": "vendor_notes",
      "label": "Vendor Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISupplyChainScanPage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-tabletop-exercise-page-2jfdd5-exact-ai": [
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITabletopExercisePage.js"
    },
    {
      "name": "duration_minutes",
      "label": "Duration Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITabletopExercisePage.js"
    },
    {
      "name": "threat_profile",
      "label": "Threat Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITabletopExercisePage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-triage-alerts-page-1zqim3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Triage Alerts Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITriageAlertsPage.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-5cuwes-exact-ai": [
    {
      "name": "alert_notes",
      "label": "Alert Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "alert_title",
      "label": "Alert Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "alerts",
      "label": "Alerts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_sources",
      "label": "Data Sources",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "environment",
      "label": "Environment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hypothesis",
      "label": "Hypothesis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident_notes",
      "label": "Incident Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident_title",
      "label": "Incident Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "ioc",
      "label": "Ioc",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "timeline_notes",
      "label": "Timeline Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "trigger",
      "label": "Trigger",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-cyber-soc-copilot-source-workflow": [
    {
      "name": "incident_notes",
      "label": "Incident Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBreachNarrativePage.js"
    },
    {
      "name": "incident_title",
      "label": "Incident Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBreachNarrativePage.js"
    },
    {
      "name": "data_sources_csv",
      "label": "Data Sources Csv",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBuildHuntPage.js"
    },
    {
      "name": "environment",
      "label": "Environment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBuildHuntPage.js"
    },
    {
      "name": "hypothesis",
      "label": "Hypothesis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBuildHuntPage.js"
    },
    {
      "name": "asset_hostname",
      "label": "Asset Hostname",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICompromiseAssessPage.js"
    },
    {
      "name": "asset_notes",
      "label": "Asset Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICompromiseAssessPage.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Draft Playbook Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftPlaybookPage.js"
    },
    {
      "name": "source",
      "label": "Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEnrichIocPage.js"
    },
    {
      "name": "alert_notes",
      "label": "Alert Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFalsePositiveReducerPage.js"
    },
    {
      "name": "alert_title",
      "label": "Alert Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFalsePositiveReducerPage.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIdentityRiskPage.js"
    },
    {
      "name": "user_notes",
      "label": "User Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIdentityRiskPage.js"
    },
    {
      "name": "intent",
      "label": "Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILogQueryCopilotPage.js"
    },
    {
      "name": "platform",
      "label": "Platform",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILogQueryCopilotPage.js"
    },
    {
      "name": "schema_hints",
      "label": "Schema Hints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILogQueryCopilotPage.js"
    },
    {
      "name": "timeline_notes",
      "label": "Timeline Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPostIncidentReportPage.js"
    },
    {
      "name": "incident_severity",
      "label": "Incident Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRemediationEstimatorPage.js"
    },
    {
      "name": "vendor_name",
      "label": "Vendor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISupplyChainScanPage.js"
    },
    {
      "name": "vendor_notes",
      "label": "Vendor Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISupplyChainScanPage.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITabletopExercisePage.js"
    },
    {
      "name": "duration_minutes",
      "label": "Duration Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITabletopExercisePage.js"
    },
    {
      "name": "threat_profile",
      "label": "Threat Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITabletopExercisePage.js"
    },
    {
      "name": "alerts",
      "label": "Alerts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_sources",
      "label": "Data Sources",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "ioc",
      "label": "Ioc",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "trigger",
      "label": "Trigger",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-cyber-soc-copilot-ai-tools": [
    {
      "name": "incident_notes",
      "label": "Incident Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBreachNarrativePage.js"
    },
    {
      "name": "incident_title",
      "label": "Incident Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBreachNarrativePage.js"
    },
    {
      "name": "data_sources_csv",
      "label": "Data Sources Csv",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBuildHuntPage.js"
    },
    {
      "name": "environment",
      "label": "Environment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBuildHuntPage.js"
    },
    {
      "name": "hypothesis",
      "label": "Hypothesis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBuildHuntPage.js"
    },
    {
      "name": "asset_hostname",
      "label": "Asset Hostname",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICompromiseAssessPage.js"
    },
    {
      "name": "asset_notes",
      "label": "Asset Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICompromiseAssessPage.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Draft Playbook Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftPlaybookPage.js"
    },
    {
      "name": "source",
      "label": "Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEnrichIocPage.js"
    },
    {
      "name": "alert_notes",
      "label": "Alert Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFalsePositiveReducerPage.js"
    },
    {
      "name": "alert_title",
      "label": "Alert Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFalsePositiveReducerPage.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIdentityRiskPage.js"
    },
    {
      "name": "user_notes",
      "label": "User Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIIdentityRiskPage.js"
    },
    {
      "name": "intent",
      "label": "Intent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILogQueryCopilotPage.js"
    },
    {
      "name": "platform",
      "label": "Platform",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILogQueryCopilotPage.js"
    },
    {
      "name": "schema_hints",
      "label": "Schema Hints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILogQueryCopilotPage.js"
    },
    {
      "name": "timeline_notes",
      "label": "Timeline Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPostIncidentReportPage.js"
    },
    {
      "name": "incident_severity",
      "label": "Incident Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRemediationEstimatorPage.js"
    },
    {
      "name": "vendor_name",
      "label": "Vendor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISupplyChainScanPage.js"
    },
    {
      "name": "vendor_notes",
      "label": "Vendor Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISupplyChainScanPage.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITabletopExercisePage.js"
    },
    {
      "name": "duration_minutes",
      "label": "Duration Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITabletopExercisePage.js"
    },
    {
      "name": "threat_profile",
      "label": "Threat Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITabletopExercisePage.js"
    },
    {
      "name": "alerts",
      "label": "Alerts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_sources",
      "label": "Data Sources",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "ioc",
      "label": "Ioc",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "trigger",
      "label": "Trigger",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-asset-criticality-page-1d8non-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Asset Criticality Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssetCriticalityPage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-baseline-protocol-page-1cogmx-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Baseline Protocol Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBaselineProtocolPage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-classify-asset-page-jfzxxe-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Classify Asset Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIClassifyAssetPage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-classify-incident-page-1yi3fq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Classify Incident Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIClassifyIncidentPage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-control-loop-anomaly-page-bc0748-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Control Loop Anomaly Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIControlLoopAnomalyPage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-draft-change-procedure-page-1h10hm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Draft Change Procedure Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDraftChangeProcedurePage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-executive-brief-page-7pgscw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Executive Brief Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIExecutiveBriefPage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-hunt-attack-path-page-vx87fs-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Hunt Attack Path Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHuntAttackPathPage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-lateral-movement-narrative-page-1n2lx4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Lateral Movement Narrative Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AILateralMovementNarrativePage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-malicious-firmware-detect-page-xhbzfa-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Malicious Firmware Detect Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIMaliciousFirmwareDetectPage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-network-segmentation-page-mwsrl6-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Network Segmentation Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AINetworkSegmentationPage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-operator-action-review-page-wsrydq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Operator Action Review Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIOperatorActionReviewPage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-parse-protocol-payload-page-zvzjnr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Parse Protocol Payload Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIParseProtocolPayloadPage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-prioritize-vulns-page-g06j8l-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Prioritize Vulns Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPrioritizeVulnsPage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-safety-impact-page-1rxk0c-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Safety Impact Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISafetyImpactPage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-suggest-isolation-page-ns6uqy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Suggest Isolation Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISuggestIsolationPage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-supply-chain-firmware-page-piy7c5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Supply Chain Firmware Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISupplyChainFirmwarePage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-triage-ics-alert-page-hyihxt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Triage Ics Alert Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITriageIcsAlertPage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-vendor-patch-impact-page-3j3f36-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Vendor Patch Impact Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIVendorPatchImpactPage.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-5cuwes-exact-ai": [
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "event",
      "label": "Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "focus",
      "label": "Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hypothesis",
      "label": "Hypothesis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "loop_id",
      "label": "Loop Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "observation",
      "label": "Observation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "protocol",
      "label": "Protocol",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target",
      "label": "Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "telemetry",
      "label": "Telemetry",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "telemetry_notes",
      "label": "Telemetry Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "zone",
      "label": "Zone",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-v2-9173n4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiV2.js"
    },
    {
      "name": "fingerprint",
      "label": "Fingerprint",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiV2.js"
    },
    {
      "name": "fingerprint_text",
      "label": "Fingerprint Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiV2.js"
    },
    {
      "name": "payload",
      "label": "Payload",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiV2.js"
    },
    {
      "name": "payload_text",
      "label": "Payload Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiV2.js"
    },
    {
      "name": "protocol",
      "label": "Protocol",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiV2.js"
    }
  ],
  "aiot-sec-ops-for-ics-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Asset Criticality Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssetCriticalityPage.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "event",
      "label": "Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "focus",
      "label": "Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hypothesis",
      "label": "Hypothesis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "loop_id",
      "label": "Loop Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "observation",
      "label": "Observation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "protocol",
      "label": "Protocol",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target",
      "label": "Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "telemetry",
      "label": "Telemetry",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "telemetry_notes",
      "label": "Telemetry Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "zone",
      "label": "Zone",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "fingerprint",
      "label": "Fingerprint",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiV2.js"
    },
    {
      "name": "fingerprint_text",
      "label": "Fingerprint Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiV2.js"
    },
    {
      "name": "payload",
      "label": "Payload",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiV2.js"
    },
    {
      "name": "payload_text",
      "label": "Payload Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiV2.js"
    }
  ],
  "aiot-sec-ops-for-ics-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Asset Criticality Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAssetCriticalityPage.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "event",
      "label": "Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "focus",
      "label": "Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hypothesis",
      "label": "Hypothesis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "loop_id",
      "label": "Loop Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "observation",
      "label": "Observation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "protocol",
      "label": "Protocol",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target",
      "label": "Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "telemetry",
      "label": "Telemetry",
      "type": "tel",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "telemetry_notes",
      "label": "Telemetry Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "zone",
      "label": "Zone",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "fingerprint",
      "label": "Fingerprint",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiV2.js"
    },
    {
      "name": "fingerprint_text",
      "label": "Fingerprint Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiV2.js"
    },
    {
      "name": "payload",
      "label": "Payload",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiV2.js"
    },
    {
      "name": "payload_text",
      "label": "Payload Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiV2.js"
    }
  ],
  "security-detection-ai-analysis-7j2jpp-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Analysis source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAnalysis.tsx"
    }
  ],
  "security-detection-email-verification-487bvm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Email Verification source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/EmailVerification.tsx"
    }
  ],
  "security-detection-kill-chain-view-baxlv9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Kill Chain View source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/KillChainView.tsx"
    }
  ],
  "security-detection-ai-1kdkmm-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI source input context",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai.py"
    }
  ],
  "security-detection-ai-extras-1mupwe-exact-ai": [
    {
      "name": "alerts",
      "label": "Alerts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "asset_inventory",
      "label": "Asset Inventory",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "baseline_window_days",
      "label": "Baseline Window Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "dict",
      "label": "Dict",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "events",
      "label": "Events",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "incident_summary",
      "label": "Incident Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "indicators",
      "label": "Indicators",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "target",
      "label": "Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    }
  ],
  "security-detection-ai-rate-limit-ik8p21-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Rate Limit source input context",
      "options": [],
      "required": false,
      "source": "backend/python/api/middleware/ai_rate_limit.py"
    }
  ],
  "security-detection-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Analysis source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAnalysis.tsx"
    },
    {
      "name": "alerts",
      "label": "Alerts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "asset_inventory",
      "label": "Asset Inventory",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "baseline_window_days",
      "label": "Baseline Window Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "dict",
      "label": "Dict",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "events",
      "label": "Events",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "incident_summary",
      "label": "Incident Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "indicators",
      "label": "Indicators",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "target",
      "label": "Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    }
  ],
  "security-detection-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Analysis source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAnalysis.tsx"
    },
    {
      "name": "alerts",
      "label": "Alerts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "asset_inventory",
      "label": "Asset Inventory",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "baseline_window_days",
      "label": "Baseline Window Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "dict",
      "label": "Dict",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "events",
      "label": "Events",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "incident_summary",
      "label": "Incident Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "indicators",
      "label": "Indicators",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "target",
      "label": "Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/python/api/routes/ai_extras.py"
    }
  ]
};
