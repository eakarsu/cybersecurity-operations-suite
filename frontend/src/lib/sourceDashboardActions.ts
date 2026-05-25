export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AICyberSOCCopilot",
      "AIOTSecOpsForICS",
      "security_detection"
    ],
    "examples": [
      "backend/nodejs/src/auth/dto/verify-email.dto",
      "backend/nodejs/src/auth/email.service",
      "backend/nodejs/src/security/openrouter.service",
      "backend/nodejs/src/workflow/controllers/ai-workflow.controller",
      "backend/nodejs/src/workflow/nodes/email-analysis-node",
      "backend/nodejs/src/workflow/services/ai-workflow-generator.service"
    ],
    "count": 3
  },
  {
    "id": "source-workflows",
    "label": "Source Workflows",
    "description": "Open source-derived workflows and feature actions.",
    "href": "/features",
    "sourceProjects": [
      "security_detection"
    ],
    "examples": [
      "backend/python/utils/prompts"
    ],
    "count": 1
  }
];
