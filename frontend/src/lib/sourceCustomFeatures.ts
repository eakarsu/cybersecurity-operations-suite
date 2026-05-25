import type { FeatureContext, FeatureDefinition, PageDefinition } from '@/lib/unifiedApp';
import type { FeatureEntitySet } from '@/lib/featureEntities';
import type { FeatureSurface } from '@/lib/featureSurfaces';

export const sourceCustomFeatureCatalog: FeatureDefinition[] = [
  {
    "title": "AI Cyber SOC Copilot Source Feature",
    "href": "/features/source-ai-cyber-soc-copilot",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AICyberSOCCopilot: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "25 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AIOT Sec Ops For ICS Source Feature",
    "href": "/features/source-aiot-sec-ops-for-ics",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIOTSecOpsForICS: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "25 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "Security Detection Source Feature",
    "href": "/features/source-security-detection",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in security_detection: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "21 AI, prompt, tool, or workflow files captured"
    ]
  }
];

export const sourceCustomFeatureFamilies: Array<{ name: string; features: string[] }> = [
  {
    "name": "Source Project Features",
    "features": [
      "AI Cyber SOC Copilot Source Feature",
      "AIOT Sec Ops For ICS Source Feature",
      "Security Detection Source Feature"
    ]
  }
];

export const sourceCustomPageRegistry: Record<string, PageDefinition> = {
  "source-ai-cyber-soc-copilot": {
    "title": "AI Cyber SOC Copilot Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AICyberSOCCopilot, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AICyberSOCCopilot: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "25 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "25",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-aiot-sec-ops-for-ics": {
    "title": "AIOT Sec Ops For ICS Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIOTSecOpsForICS, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIOTSecOpsForICS: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "25 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "25",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-security-detection": {
    "title": "Security Detection Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from security_detection, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in security_detection: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "21 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "21",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  }
};

export const sourceCustomFeatureContexts: Record<string, FeatureContext> = {
  "AI Cyber SOC Copilot Source Feature": {
    "sourceOwners": [
      "AICyberSOCCopilot"
    ],
    "operatingQueues": [
      "AI Breach Narrative Page",
      "AI Build Hunt Page",
      "AI Compromise Assess Page",
      "AI Draft Playbook Page"
    ],
    "outputs": [
      "AI Cyber SOC Copilot merged workflow register",
      "AI Cyber SOC Copilot API and route coverage map",
      "AI Cyber SOC Copilot AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AIOT Sec Ops For ICS Source Feature": {
    "sourceOwners": [
      "AIOTSecOpsForICS"
    ],
    "operatingQueues": [
      "AI Asset Criticality Page",
      "AI Baseline Protocol Page",
      "AI Classify Asset Page",
      "AI Classify Incident Page"
    ],
    "outputs": [
      "AIOT Sec Ops For ICS merged workflow register",
      "AIOT Sec Ops For ICS API and route coverage map",
      "AIOT Sec Ops For ICS AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "Security Detection Source Feature": {
    "sourceOwners": [
      "security_detection"
    ],
    "operatingQueues": [
      "Prompts",
      "Openrouter Service",
      "Openrouter.Service",
      "AI Analysis"
    ],
    "outputs": [
      "Security Detection merged workflow register",
      "Security Detection API and route coverage map",
      "Security Detection AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  }
};

export const sourceCustomFeatureSurfaceBySlug: Record<string, FeatureSurface> = {
  "source-ai-cyber-soc-copilot": {
    "workItems": [
      {
        "id": "source-ai-cyber-soc-copilot-work-1",
        "item": "AI Breach Narrative Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIBreachNarrativePage.js"
      },
      {
        "id": "source-ai-cyber-soc-copilot-work-2",
        "item": "AI Build Hunt Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIBuildHuntPage.js"
      },
      {
        "id": "source-ai-cyber-soc-copilot-work-3",
        "item": "AI Compromise Assess Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AICompromiseAssessPage.js"
      },
      {
        "id": "source-ai-cyber-soc-copilot-work-4",
        "item": "AI Draft Playbook Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIDraftPlaybookPage.js"
      },
      {
        "id": "source-ai-cyber-soc-copilot-work-5",
        "item": "AI Enrich Ioc Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIEnrichIocPage.js"
      },
      {
        "id": "source-ai-cyber-soc-copilot-work-6",
        "item": "AI Executive Brief Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIExecutiveBriefPage.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-cyber-soc-copilot-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-cyber-soc-copilot-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-cyber-soc-copilot-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-cyber-soc-copilot-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-cyber-soc-copilot-log-1",
        "message": "Deep-merge feature generated from AICyberSOCCopilot",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-cyber-soc-copilot-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-aiot-sec-ops-for-ics": {
    "workItems": [
      {
        "id": "source-aiot-sec-ops-for-ics-work-1",
        "item": "AI Asset Criticality Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIAssetCriticalityPage.js"
      },
      {
        "id": "source-aiot-sec-ops-for-ics-work-2",
        "item": "AI Baseline Protocol Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIBaselineProtocolPage.js"
      },
      {
        "id": "source-aiot-sec-ops-for-ics-work-3",
        "item": "AI Classify Asset Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIClassifyAssetPage.js"
      },
      {
        "id": "source-aiot-sec-ops-for-ics-work-4",
        "item": "AI Classify Incident Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIClassifyIncidentPage.js"
      },
      {
        "id": "source-aiot-sec-ops-for-ics-work-5",
        "item": "AI Control Loop Anomaly Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIControlLoopAnomalyPage.js"
      },
      {
        "id": "source-aiot-sec-ops-for-ics-work-6",
        "item": "AI Draft Change Procedure Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIDraftChangeProcedurePage.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-aiot-sec-ops-for-ics-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-aiot-sec-ops-for-ics-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-aiot-sec-ops-for-ics-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-aiot-sec-ops-for-ics-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-aiot-sec-ops-for-ics-log-1",
        "message": "Deep-merge feature generated from AIOTSecOpsForICS",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-aiot-sec-ops-for-ics-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-security-detection": {
    "workItems": [
      {
        "id": "source-security-detection-work-1",
        "item": "Prompts",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/python/utils/prompts.py"
      },
      {
        "id": "source-security-detection-work-2",
        "item": "Openrouter Service",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/python/api/services/openrouter_service.py"
      },
      {
        "id": "source-security-detection-work-3",
        "item": "Openrouter.Service",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/nodejs/src/security/openrouter.service.ts"
      },
      {
        "id": "source-security-detection-work-4",
        "item": "AI Analysis",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIAnalysis.tsx"
      },
      {
        "id": "source-security-detection-work-5",
        "item": "Email Verification",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/EmailVerification.tsx"
      },
      {
        "id": "source-security-detection-work-6",
        "item": "Kill Chain View",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/KillChainView.tsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-security-detection-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-security-detection-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-security-detection-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-security-detection-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-security-detection-log-1",
        "message": "Deep-merge feature generated from security_detection",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-security-detection-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  }
};

export const sourceCustomFeatureEntitiesBySlug: Record<string, FeatureEntitySet> = {
  "source-ai-cyber-soc-copilot": {
    "title": "AI Cyber SOC Copilot Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-cyber-soc-copilot-entity-1",
        "name": "AI Breach Narrative Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-cyber-soc-copilot-entity-2",
        "name": "AI Build Hunt Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-cyber-soc-copilot-entity-3",
        "name": "AI Compromise Assess Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-cyber-soc-copilot-entity-4",
        "name": "AI Draft Playbook Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-cyber-soc-copilot-entity-5",
        "name": "AI Enrich Ioc Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-aiot-sec-ops-for-ics": {
    "title": "AIOT Sec Ops For ICS Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-aiot-sec-ops-for-ics-entity-1",
        "name": "AI Asset Criticality Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-aiot-sec-ops-for-ics-entity-2",
        "name": "AI Baseline Protocol Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-aiot-sec-ops-for-ics-entity-3",
        "name": "AI Classify Asset Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-aiot-sec-ops-for-ics-entity-4",
        "name": "AI Classify Incident Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-aiot-sec-ops-for-ics-entity-5",
        "name": "AI Control Loop Anomaly Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-security-detection": {
    "title": "Security Detection Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-security-detection-entity-1",
        "name": "Prompts",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-security-detection-entity-2",
        "name": "Openrouter Service",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-security-detection-entity-3",
        "name": "Openrouter.Service",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-security-detection-entity-4",
        "name": "AI Analysis",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-security-detection-entity-5",
        "name": "Email Verification",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  }
};

export const sourceCustomFeatureLinksByProject: Record<string, string> = {
  "AICyberSOCCopilot": "/features/source-ai-cyber-soc-copilot",
  "AIOTSecOpsForICS": "/features/source-aiot-sec-ops-for-ics",
  "security_detection": "/features/source-security-detection"
};
