export interface NodeDetail {
  name: string;
  type: string;
  typeClass: 'tag-blue' | 'tag-amber' | 'tag-red' | 'tag-green' | 'tag-dim';
  desc: string;
  inputs: string[];
  outputs: string[];
  governance: string[];
  risk: string;
}

export interface Agent {
  icon: string;
  name: string;
  desc: string;
  riskTier: 'Low' | 'Medium' | 'High';
  color: 'tag-green' | 'tag-amber' | 'tag-red';
  scope: string[];
  cannot: string[];
  escalates: string[];
  owner: string;
  changeApproval: string;
  monitoring: string;
  aiActStatus: string;
}

export interface GovLayerItem {
  title: string;
  body: string;
}

export interface GovLayer {
  num: string;
  name: string;
  color: string;
  subtitle: string;
  badges: string[];
  what: GovLayerItem[];
  how: GovLayerItem[];
  failure: GovLayerItem[];
}

export interface OpModelRole {
  name: string;
  desc: string;
}

export interface OpModelTier {
  tier: string;
  name: string;
  cadence: string;
  color: string;
  roles: OpModelRole[];
  activities: string[];
}

export interface EscalationRow {
  scenario: string;
  agent: string;
  trigger: string;
  routeTo: string;
  sla: string;
  authority: string;
  risk: 'low' | 'med' | 'high' | 'crit';
}

export interface GfDetail {
  title: string;
  tier: string;
  color: string;
  who: string;
  what: string;
  inputs: string;
  outputs: string;
  triggersUp: string;
  triggersDown: string;
}

export interface GfFlowStep {
  tier: 1 | 2 | 3;
  x: number;
  label: string;
  time: string;
  branch?: boolean;
}

export interface GfFlow {
  color: string;
  colorHex: string;
  title: string;
  subtitle: string;
  steps: GfFlowStep[];
}

export interface RegObligation {
  label: string;
  labelClass: string;
  text: string;
}

export interface RegFramework {
  icon: string;
  name: string;
  scope: string;
  color: string;
  obligations: RegObligation[];
}
