export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AICyberSOCCopilot', ownership: 'Incidents source capabilities and workflows', coverage: ['Incidents', 'Alerts', 'Assets'] },
  { name: 'AIAutonomousPenTestingAgent', ownership: 'Alerts source capabilities and workflows', coverage: ['Vulnerabilities', 'Investigations', 'Playbooks'] },
  { name: 'AIOTSecOpsForICS', ownership: 'Assets source capabilities and workflows', coverage: ['Threat Intel', 'Compliance', 'Pen Tests'] },
  { name: 'security_detection', ownership: 'Vulnerabilities source capabilities and workflows', coverage: ['Access Reviews', 'Evidence', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Incidents', value: '84', note: 'Active' },
  { label: 'Alerts', value: '61', note: 'Open' },
  { label: 'Assets', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Incidents operating view', 'Alerts operating view', 'Assets operating view', 'Vulnerabilities operating view', 'Investigations operating view', 'Playbooks operating view', 'Threat Intel operating view', 'Compliance operating view'];
export const workflowHighlights = ['Incidents workflow with records, approvals, audit, and reporting', 'Alerts workflow with records, approvals, audit, and reporting', 'Assets workflow with records, approvals, audit, and reporting', 'Vulnerabilities workflow with records, approvals, audit, and reporting', 'Investigations workflow with records, approvals, audit, and reporting'];
