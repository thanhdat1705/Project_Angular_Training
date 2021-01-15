export interface MarketingSocial {
  id: number;
  logoUrl: string;
  name: string;
  postNumber: number;
  interactionTime: number;
  approachUser: number;
  cost: number;
}

export interface MarketingMedia {
  id: number;
  iconUrl: string;
  name: string;
  cost: number;
}

export interface MarketingAtCountry {
  id: number;
  iconUrl: string;
  name: string;
  cost: number;
  percent: number;
}
