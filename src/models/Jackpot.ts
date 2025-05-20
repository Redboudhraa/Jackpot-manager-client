export interface Jackpot {
    id: number;
    name: string;
    currentValue: number;
    seedValue: number;
    hitThreshold: number;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface ContributionRequest {
    amount: number;
  }
  
  export interface ContributionResponse {
    id: number;
    wasReset: boolean;
    message: string | null;
  }