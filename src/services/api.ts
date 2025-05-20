import axios from 'axios';
import { Jackpot, ContributionRequest, ContributionResponse } from '../models/Jackpot';

const API_URL = 'https://localhost:7176/api'; // Update this with your actual API URL

// Create axios instance with base URL
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// API service functions
export const jackpotService = {
  // Get all jackpots
  getAllJackpots: async (): Promise<Jackpot[]> => {
    const response = await apiClient.get<Jackpot[]>('/jackpots');
    return response.data;
  },

  // Contribute to a jackpot
  contributeToJackpot: async (jackpotId: number, amount: number): Promise<ContributionResponse> => {
    const contribution: ContributionRequest = { amount };
    const response = await apiClient.post<ContributionResponse>(
      `/jackpots/${jackpotId}/contribute`, 
      contribution
    );
    return response.data;
  }
};