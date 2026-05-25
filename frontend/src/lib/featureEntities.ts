export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['incidents', 'Incidents Records', 'Incidents priority queue', 'Open', 'Incidents exception list', 'Security Lead', '$0'],
  ['alerts', 'Alerts Records', 'Alerts priority queue', 'Review', 'Alerts exception list', 'Security Lead', '$0'],
  ['assets', 'Assets Records', 'Assets priority queue', 'Action needed', 'Assets exception list', 'Security Lead', '$0'],
  ['vulnerabilities', 'Vulnerabilities Records', 'Vulnerabilities priority queue', 'Open', 'Vulnerabilities exception list', 'Security Lead', '$0'],
  ['investigations', 'Investigations Records', 'Investigations priority queue', 'Review', 'Investigations exception list', 'Operations Lead', '$0'],
  ['playbooks', 'Playbooks Records', 'Playbooks priority queue', 'Action needed', 'Playbooks exception list', 'Operations Lead', '$0'],
  ['threat-intel', 'Threat Intel Records', 'Threat Intel priority queue', 'Open', 'Threat Intel exception list', 'Operations Lead', '$0'],
  ['compliance', 'Compliance Records', 'Compliance priority queue', 'Review', 'Compliance exception list', 'Operations Lead', '$0'],
  ['pen-tests', 'Pen Tests Records', 'Pen Tests priority queue', 'Action needed', 'Pen Tests exception list', 'Governance Lead', '$0'],
  ['access-reviews', 'Access Reviews Records', 'Access Reviews priority queue', 'Open', 'Access Reviews exception list', 'Governance Lead', '$0'],
  ['evidence', 'Evidence Records', 'Evidence priority queue', 'Review', 'Evidence exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
