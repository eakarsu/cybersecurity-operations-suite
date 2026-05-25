export const sourceProjectTools = [
  {
    "id": "ai-cyber-soc-copilot-source-workflow",
    "title": "AI Cyber SOC Copilot Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AICyberSOCCopilot.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AICyberSOCCopilot to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Cyber SOC Copilot source context",
    "outputLabel": "AI Cyber SOC Copilot source analysis",
    "signals": [
      "frontend/src/pages/AIBreachNarrativePage",
      "frontend/src/pages/AIBuildHuntPage",
      "frontend/src/pages/AICompromiseAssessPage",
      "frontend/src/pages/AIDraftPlaybookPage",
      "frontend/src/pages/AIEnrichIocPage",
      "frontend/src/pages/AIExecutiveBriefPage",
      "frontend/src/pages/AIFalsePositiveReducerPage",
      "frontend/src/pages/AIIdentityRiskPage"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-tools",
    "title": "AI Cyber SOC Copilot AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AICyberSOCCopilot.",
    "defaultPrompt": "Review AICyberSOCCopilot AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Cyber SOC Copilot AI prompt or tool context",
    "outputLabel": "AI Cyber SOC Copilot AI tool response",
    "signals": [
      "frontend/src/pages/AIBreachNarrativePage.js",
      "frontend/src/pages/AIBuildHuntPage.js",
      "frontend/src/pages/AICompromiseAssessPage.js",
      "frontend/src/pages/AIDraftPlaybookPage.js",
      "frontend/src/pages/AIEnrichIocPage.js",
      "frontend/src/pages/AIExecutiveBriefPage.js",
      "frontend/src/pages/AIFalsePositiveReducerPage.js",
      "frontend/src/pages/AIIdentityRiskPage.js"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-breach-narrative-page-2pks7p-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Breach Narrative Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIBreachNarrativePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Breach Narrative Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Breach Narrative Page donor inputs",
    "outputLabel": "AI Breach Narrative Page AI response",
    "signals": [
      "Incident Notes",
      "Incident Title"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-build-hunt-page-k2g01n-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Build Hunt Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIBuildHuntPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Build Hunt Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Build Hunt Page donor inputs",
    "outputLabel": "AI Build Hunt Page AI response",
    "signals": [
      "Data Sources Csv",
      "Environment",
      "Hypothesis"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-compromise-assess-page-m0d29c-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Compromise Assess Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AICompromiseAssessPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Compromise Assess Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Compromise Assess Page donor inputs",
    "outputLabel": "AI Compromise Assess Page AI response",
    "signals": [
      "Asset Hostname",
      "Asset Notes"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-draft-playbook-page-iiacwy-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Draft Playbook Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIDraftPlaybookPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Draft Playbook Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Draft Playbook Page donor inputs",
    "outputLabel": "AI Draft Playbook Page AI response",
    "signals": [
      "frontend/src/pages/AIDraftPlaybookPage.js"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-enrich-ioc-page-1wrwf9-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Enrich Ioc Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIEnrichIocPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Enrich Ioc Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Enrich Ioc Page donor inputs",
    "outputLabel": "AI Enrich Ioc Page AI response",
    "signals": [
      "Source"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-executive-brief-page-7pgscw-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Executive Brief Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIExecutiveBriefPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Executive Brief Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Executive Brief Page donor inputs",
    "outputLabel": "AI Executive Brief Page AI response",
    "signals": [
      "frontend/src/pages/AIExecutiveBriefPage.js"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-false-positive-reducer-page-1ue99t-exact-ai",
    "title": "AI Cyber SOC Copilot: AI False Positive Reducer Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIFalsePositiveReducerPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI False Positive Reducer Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI False Positive Reducer Page donor inputs",
    "outputLabel": "AI False Positive Reducer Page AI response",
    "signals": [
      "Alert Notes",
      "Alert Title"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-identity-risk-page-highun-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Identity Risk Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIIdentityRiskPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Identity Risk Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Identity Risk Page donor inputs",
    "outputLabel": "AI Identity Risk Page AI response",
    "signals": [
      "User Id",
      "User Notes"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-log-anomaly-page-96yelz-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Log Anomaly Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AILogAnomalyPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Log Anomaly Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Log Anomaly Page donor inputs",
    "outputLabel": "AI Log Anomaly Page AI response",
    "signals": [
      "frontend/src/pages/AILogAnomalyPage.js"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-log-query-copilot-page-dnq6sm-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Log Query Copilot Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AILogQueryCopilotPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Log Query Copilot Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Log Query Copilot Page donor inputs",
    "outputLabel": "AI Log Query Copilot Page AI response",
    "signals": [
      "Intent",
      "Platform",
      "Schema Hints"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-phishing-classifier-page-1jii09-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Phishing Classifier Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPhishingClassifierPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Phishing Classifier Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Phishing Classifier Page donor inputs",
    "outputLabel": "AI Phishing Classifier Page AI response",
    "signals": [
      "frontend/src/pages/AIPhishingClassifierPage.js"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-playbook-recommend-page-1cvixu-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Playbook Recommend Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPlaybookRecommendPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Playbook Recommend Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Playbook Recommend Page donor inputs",
    "outputLabel": "AI Playbook Recommend Page AI response",
    "signals": [
      "Incident Notes",
      "Incident Title"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-policy-diff-page-2deypz-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Policy Diff Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPolicyDiffPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Policy Diff Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Policy Diff Page donor inputs",
    "outputLabel": "AI Policy Diff Page AI response",
    "signals": [
      "frontend/src/pages/AIPolicyDiffPage.js"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-post-incident-report-page-1xly1a-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Post Incident Report Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPostIncidentReportPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Post Incident Report Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Post Incident Report Page donor inputs",
    "outputLabel": "AI Post Incident Report Page AI response",
    "signals": [
      "Incident Title",
      "Timeline Notes"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-red-team-page-at54pw-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Red Team Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIRedTeamPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Red Team Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Red Team Page donor inputs",
    "outputLabel": "AI Red Team Page AI response",
    "signals": [
      "frontend/src/pages/AIRedTeamPage.js"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-remediation-estimator-page-1kknij-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Remediation Estimator Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIRemediationEstimatorPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Remediation Estimator Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Remediation Estimator Page donor inputs",
    "outputLabel": "AI Remediation Estimator Page AI response",
    "signals": [
      "Incident Notes",
      "Incident Severity",
      "Incident Title"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-shift-handover-page-19zua9-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Shift Handover Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIShiftHandoverPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Shift Handover Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Shift Handover Page donor inputs",
    "outputLabel": "AI Shift Handover Page AI response",
    "signals": [
      "frontend/src/pages/AIShiftHandoverPage.js"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-supply-chain-scan-page-1xqbii-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Supply Chain Scan Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AISupplyChainScanPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Supply Chain Scan Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Supply Chain Scan Page donor inputs",
    "outputLabel": "AI Supply Chain Scan Page AI response",
    "signals": [
      "Vendor Name",
      "Vendor Notes"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-tabletop-exercise-page-2jfdd5-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Tabletop Exercise Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AITabletopExercisePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Tabletop Exercise Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Tabletop Exercise Page donor inputs",
    "outputLabel": "AI Tabletop Exercise Page AI response",
    "signals": [
      "Audience",
      "Duration Minutes",
      "Threat Profile"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-triage-alerts-page-1zqim3-exact-ai",
    "title": "AI Cyber SOC Copilot: AI Triage Alerts Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AITriageAlertsPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Triage Alerts Page\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Triage Alerts Page donor inputs",
    "outputLabel": "AI Triage Alerts Page AI response",
    "signals": [
      "frontend/src/pages/AITriageAlertsPage.js"
    ]
  },
  {
    "id": "ai-cyber-soc-copilot-ai-5cuwes-exact-ai",
    "title": "AI Cyber SOC Copilot: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AICyberSOCCopilot. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Alert Notes",
      "Alert Title",
      "Alerts",
      "Constraints",
      "Data Sources",
      "Environment",
      "Goal",
      "Hypothesis"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-source-workflow",
    "title": "AIOT Sec Ops For ICS Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIOTSecOpsForICS.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIOTSecOpsForICS to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AIOT Sec Ops For ICS source context",
    "outputLabel": "AIOT Sec Ops For ICS source analysis",
    "signals": [
      "frontend/src/pages/AIAssetCriticalityPage",
      "frontend/src/pages/AIBaselineProtocolPage",
      "frontend/src/pages/AIClassifyAssetPage",
      "frontend/src/pages/AIClassifyIncidentPage",
      "frontend/src/pages/AIControlLoopAnomalyPage",
      "frontend/src/pages/AIDraftChangeProcedurePage",
      "frontend/src/pages/AIExecutiveBriefPage",
      "frontend/src/pages/AIHuntAttackPathPage"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-tools",
    "title": "AIOT Sec Ops For ICS AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIOTSecOpsForICS.",
    "defaultPrompt": "Review AIOTSecOpsForICS AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AIOT Sec Ops For ICS AI prompt or tool context",
    "outputLabel": "AIOT Sec Ops For ICS AI tool response",
    "signals": [
      "frontend/src/pages/AIAssetCriticalityPage.js",
      "frontend/src/pages/AIBaselineProtocolPage.js",
      "frontend/src/pages/AIClassifyAssetPage.js",
      "frontend/src/pages/AIClassifyIncidentPage.js",
      "frontend/src/pages/AIControlLoopAnomalyPage.js",
      "frontend/src/pages/AIDraftChangeProcedurePage.js",
      "frontend/src/pages/AIExecutiveBriefPage.js",
      "frontend/src/pages/AIHuntAttackPathPage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-asset-criticality-page-1d8non-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Asset Criticality Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIAssetCriticalityPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Asset Criticality Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Asset Criticality Page donor inputs",
    "outputLabel": "AI Asset Criticality Page AI response",
    "signals": [
      "frontend/src/pages/AIAssetCriticalityPage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-baseline-protocol-page-1cogmx-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Baseline Protocol Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIBaselineProtocolPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Baseline Protocol Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Baseline Protocol Page donor inputs",
    "outputLabel": "AI Baseline Protocol Page AI response",
    "signals": [
      "frontend/src/pages/AIBaselineProtocolPage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-classify-asset-page-jfzxxe-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Classify Asset Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIClassifyAssetPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Classify Asset Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Classify Asset Page donor inputs",
    "outputLabel": "AI Classify Asset Page AI response",
    "signals": [
      "frontend/src/pages/AIClassifyAssetPage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-classify-incident-page-1yi3fq-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Classify Incident Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIClassifyIncidentPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Classify Incident Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Classify Incident Page donor inputs",
    "outputLabel": "AI Classify Incident Page AI response",
    "signals": [
      "frontend/src/pages/AIClassifyIncidentPage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-control-loop-anomaly-page-bc0748-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Control Loop Anomaly Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIControlLoopAnomalyPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Control Loop Anomaly Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Control Loop Anomaly Page donor inputs",
    "outputLabel": "AI Control Loop Anomaly Page AI response",
    "signals": [
      "frontend/src/pages/AIControlLoopAnomalyPage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-draft-change-procedure-page-1h10hm-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Draft Change Procedure Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIDraftChangeProcedurePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Draft Change Procedure Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Draft Change Procedure Page donor inputs",
    "outputLabel": "AI Draft Change Procedure Page AI response",
    "signals": [
      "frontend/src/pages/AIDraftChangeProcedurePage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-executive-brief-page-7pgscw-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Executive Brief Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIExecutiveBriefPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Executive Brief Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Executive Brief Page donor inputs",
    "outputLabel": "AI Executive Brief Page AI response",
    "signals": [
      "frontend/src/pages/AIExecutiveBriefPage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-hunt-attack-path-page-vx87fs-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Hunt Attack Path Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIHuntAttackPathPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Hunt Attack Path Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Hunt Attack Path Page donor inputs",
    "outputLabel": "AI Hunt Attack Path Page AI response",
    "signals": [
      "frontend/src/pages/AIHuntAttackPathPage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-lateral-movement-narrative-page-1n2lx4-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Lateral Movement Narrative Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AILateralMovementNarrativePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Lateral Movement Narrative Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Lateral Movement Narrative Page donor inputs",
    "outputLabel": "AI Lateral Movement Narrative Page AI response",
    "signals": [
      "frontend/src/pages/AILateralMovementNarrativePage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-malicious-firmware-detect-page-xhbzfa-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Malicious Firmware Detect Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIMaliciousFirmwareDetectPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Malicious Firmware Detect Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Malicious Firmware Detect Page donor inputs",
    "outputLabel": "AI Malicious Firmware Detect Page AI response",
    "signals": [
      "frontend/src/pages/AIMaliciousFirmwareDetectPage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-network-segmentation-page-mwsrl6-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Network Segmentation Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AINetworkSegmentationPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Network Segmentation Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Network Segmentation Page donor inputs",
    "outputLabel": "AI Network Segmentation Page AI response",
    "signals": [
      "frontend/src/pages/AINetworkSegmentationPage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-operator-action-review-page-wsrydq-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Operator Action Review Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIOperatorActionReviewPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Operator Action Review Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Operator Action Review Page donor inputs",
    "outputLabel": "AI Operator Action Review Page AI response",
    "signals": [
      "frontend/src/pages/AIOperatorActionReviewPage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-parse-protocol-payload-page-zvzjnr-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Parse Protocol Payload Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIParseProtocolPayloadPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Parse Protocol Payload Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Parse Protocol Payload Page donor inputs",
    "outputLabel": "AI Parse Protocol Payload Page AI response",
    "signals": [
      "frontend/src/pages/AIParseProtocolPayloadPage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-prioritize-vulns-page-g06j8l-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Prioritize Vulns Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPrioritizeVulnsPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Prioritize Vulns Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Prioritize Vulns Page donor inputs",
    "outputLabel": "AI Prioritize Vulns Page AI response",
    "signals": [
      "frontend/src/pages/AIPrioritizeVulnsPage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-safety-impact-page-1rxk0c-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Safety Impact Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AISafetyImpactPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Safety Impact Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Safety Impact Page donor inputs",
    "outputLabel": "AI Safety Impact Page AI response",
    "signals": [
      "frontend/src/pages/AISafetyImpactPage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-suggest-isolation-page-ns6uqy-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Suggest Isolation Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AISuggestIsolationPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Suggest Isolation Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Suggest Isolation Page donor inputs",
    "outputLabel": "AI Suggest Isolation Page AI response",
    "signals": [
      "frontend/src/pages/AISuggestIsolationPage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-supply-chain-firmware-page-piy7c5-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Supply Chain Firmware Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AISupplyChainFirmwarePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Supply Chain Firmware Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Supply Chain Firmware Page donor inputs",
    "outputLabel": "AI Supply Chain Firmware Page AI response",
    "signals": [
      "frontend/src/pages/AISupplyChainFirmwarePage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-triage-ics-alert-page-hyihxt-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Triage Ics Alert Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AITriageIcsAlertPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Triage Ics Alert Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Triage Ics Alert Page donor inputs",
    "outputLabel": "AI Triage Ics Alert Page AI response",
    "signals": [
      "frontend/src/pages/AITriageIcsAlertPage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-vendor-patch-impact-page-3j3f36-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI Vendor Patch Impact Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIVendorPatchImpactPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Vendor Patch Impact Page\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Vendor Patch Impact Page donor inputs",
    "outputLabel": "AI Vendor Patch Impact Page AI response",
    "signals": [
      "frontend/src/pages/AIVendorPatchImpactPage.js"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-5cuwes-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Constraints",
      "Context",
      "Event",
      "Focus",
      "Hypothesis",
      "Loop Id",
      "Notes",
      "Observation"
    ]
  },
  {
    "id": "aiot-sec-ops-for-ics-ai-v2-9173n4-exact-ai",
    "title": "AIOT Sec Ops For ICS: AI V2",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/aiV2.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI V2\" from AIOTSecOpsForICS. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI V2 donor inputs",
    "outputLabel": "AI V2 AI response",
    "signals": [
      "Context",
      "Fingerprint",
      "Fingerprint Text",
      "Payload",
      "Payload Text",
      "Protocol"
    ]
  },
  {
    "id": "security-detection-source-workflow",
    "title": "Security Detection Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from security_detection.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from security_detection to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "Security Detection source context",
    "outputLabel": "Security Detection source analysis",
    "signals": [
      "backend/python/utils/prompts",
      "backend/python/api/services/openrouter_service",
      "backend/nodejs/src/security/openrouter.service",
      "frontend/src/pages/AIAnalysis",
      "frontend/src/pages/EmailVerification",
      "frontend/src/pages/KillChainView",
      "frontend/src/components/workflow/nodes/AIAnalysisNode",
      "backend/python/main"
    ]
  },
  {
    "id": "security-detection-ai-tools",
    "title": "Security Detection AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from security_detection.",
    "defaultPrompt": "Review security_detection AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "Security Detection AI prompt or tool context",
    "outputLabel": "Security Detection AI tool response",
    "signals": [
      "backend/python/utils/prompts.py",
      "backend/python/api/services/openrouter_service.py",
      "backend/nodejs/src/security/openrouter.service.ts",
      "frontend/src/pages/AIAnalysis.tsx",
      "frontend/src/pages/EmailVerification.tsx",
      "frontend/src/pages/KillChainView.tsx",
      "frontend/src/components/workflow/nodes/AIAnalysisNode.tsx",
      "backend/python/main.py"
    ]
  },
  {
    "id": "security-detection-ai-analysis-7j2jpp-exact-ai",
    "title": "Security Detection: AI Analysis",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIAnalysis.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Analysis\" from security_detection. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Analysis donor inputs",
    "outputLabel": "AI Analysis AI response",
    "signals": [
      "frontend/src/pages/AIAnalysis.tsx"
    ]
  },
  {
    "id": "security-detection-email-verification-487bvm-exact-ai",
    "title": "Security Detection: Email Verification",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/EmailVerification.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Email Verification\" from security_detection. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Email Verification donor inputs",
    "outputLabel": "Email Verification AI response",
    "signals": [
      "frontend/src/pages/EmailVerification.tsx"
    ]
  },
  {
    "id": "security-detection-kill-chain-view-baxlv9-exact-ai",
    "title": "Security Detection: Kill Chain View",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/KillChainView.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Kill Chain View\" from security_detection. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Kill Chain View donor inputs",
    "outputLabel": "Kill Chain View AI response",
    "signals": [
      "frontend/src/pages/KillChainView.tsx"
    ]
  },
  {
    "id": "security-detection-ai-1kdkmm-exact-ai",
    "title": "Security Detection: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/python/api/routes/ai.py. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from security_detection. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "backend/python/api/routes/ai.py"
    ]
  },
  {
    "id": "security-detection-ai-extras-1mupwe-exact-ai",
    "title": "Security Detection: AI Extras",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/python/api/routes/ai_extras.py. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Extras\" from security_detection. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Extras donor inputs",
    "outputLabel": "AI Extras AI response",
    "signals": [
      "Alerts",
      "Asset Inventory",
      "Baseline Window Days",
      "Dict",
      "Events",
      "Incident Summary",
      "Indicators",
      "Severity"
    ]
  },
  {
    "id": "security-detection-ai-rate-limit-ik8p21-exact-ai",
    "title": "Security Detection: AI Rate Limit",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/python/api/middleware/ai_rate_limit.py. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Rate Limit\" from security_detection. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Rate Limit donor inputs",
    "outputLabel": "AI Rate Limit AI response",
    "signals": [
      "backend/python/api/middleware/ai_rate_limit.py"
    ]
  }
];
