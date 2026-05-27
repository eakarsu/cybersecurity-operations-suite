export type FeatureSurfaceRow = { id: string; item: string; status: string; owner: string; nextStep: string };
export type FeatureSurface = {
  workItems: FeatureSurfaceRow[];
  quickActions: string[];
  controlChecks: Array<{ id: string; label: string; done: boolean }>;
  activityLog: Array<{ id: string; message: string; at: string }>;
};

const featureSeeds = [
  ['incidents', 'Incidents', 'Incidents operating queue', 'Security Lead', 'Review and assign next action'],
  ['alerts', 'Alerts', 'Alerts operating queue', 'Security Lead', 'Review and assign next action'],
  ['assets', 'Assets', 'Assets operating queue', 'Security Lead', 'Review and assign next action'],
  ['vulnerabilities', 'Vulnerabilities', 'Vulnerabilities operating queue', 'Security Lead', 'Review and assign next action'],
  ['investigations', 'Investigations', 'Investigations operating queue', 'Operations Lead', 'Review and assign next action'],
  ['playbooks', 'Playbooks', 'Playbooks operating queue', 'Operations Lead', 'Review and assign next action'],
  ['threat-intel', 'Threat Intel', 'Threat Intel operating queue', 'Operations Lead', 'Review and assign next action'],
  ['compliance', 'Compliance', 'Compliance operating queue', 'Operations Lead', 'Review and assign next action'],
  ['pen-tests', 'Pen Tests', 'Pen Tests operating queue', 'Governance Lead', 'Review and assign next action'],
  ['access-reviews', 'Access Reviews', 'Access Reviews operating queue', 'Governance Lead', 'Review and assign next action'],
  ['evidence', 'Evidence', 'Evidence operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ['reports', 'Reports', 'Reports operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ["pentest-scope","Pentest Scope","Pentest Scope review queue","Penetration Testing Agent","Review source context and assign owner"],
  ["vulnerability-findings","Vulnerability Findings","Vulnerability Findings review queue","Penetration Testing Agent","Confirm next action and update evidence"],
  ["attack-path-review","Attack Path Review","Attack Path Review review queue","Penetration Testing Agent","Confirm next action and update evidence"],
  ['documents', 'Documents', 'Documents operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['notifications', 'Notifications', 'Notifications operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['integrations', 'Integrations', 'Integrations operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['profiles', 'Profiles', 'Profiles operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['ai-assistant', 'AI Assistant', 'AI Assistant operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ['ai-tools', 'AI Tools', 'AI Tools operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
] as const;

function buildSurface(slug: string, title: string, item: string, owner: string, nextStep: string): FeatureSurface {
  return {
    workItems: [
      { id: `${slug}-1`, item, status: 'Open', owner, nextStep },
      { id: `${slug}-2`, item: `${title} exception review`, status: 'Review', owner: 'Operations', nextStep: 'Investigate exception and assign owner' },
      { id: `${slug}-3`, item: `${title} weekly operating queue`, status: 'Queued', owner: 'Team Lead', nextStep: 'Prioritize next actions' },
    ],
    quickActions: [`Create ${title} record`, `Export ${title} list`, `Review ${title} exceptions`],
    controlChecks: [
      { id: `${slug}-check-1`, label: `${title} owner assigned`, done: true },
      { id: `${slug}-check-2`, label: `${title} next step documented`, done: false },
      { id: `${slug}-check-3`, label: `${title} audit trail current`, done: true },
    ],
    activityLog: [
      { id: `${slug}-log-1`, message: `${title} queue refreshed`, at: '2026-05-24 09:00' },
      { id: `${slug}-log-2`, message: `${title} exception assigned`, at: '2026-05-24 11:30' },
    ],
  };
}

export const featureSurfaceBySlug: Record<string, FeatureSurface> = Object.fromEntries(featureSeeds.map(([slug, title, item, owner, nextStep]) => [slug, buildSurface(slug, title, item, owner, nextStep)]));
export const featureSurfaces: Record<string, FeatureSurface> = Object.fromEntries(featureSeeds.map(([slug, title]) => [title, featureSurfaceBySlug[slug]]));
