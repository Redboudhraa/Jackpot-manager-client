import { useState, useEffect, useCallback } from 'react';
import { Jackpot } from '../models/Jackpot';
import { jackpotService } from '../services/api';

interface UseJackpotsReturn {
  jackpots: Jackpot[];
  loading: boolean;
  error: string | null;
  resetMessage: string | null;
  highlightedJackpotId: number | null;
  refreshJackpots: () => Promise<void>;
  contributeToJackpot: (jackpotId: number, amount: number) => Promise<void>;
}

export const useJackpots = (): UseJackpotsReturn => {
  const [jackpots, setJackpots] = useState<Jackpot[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [resetMessage, setResetMessage] = useState<string | null>(null);
  const [highlightedJackpotId, setHighlightedJackpotId] = useState<number | null>(null);

  // Function to fetch all jackpots
  const refreshJackpots = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await jackpotService.getAllJackpots();
      setJackpots(data);
    } catch (err) {
      setError('Failed to load jackpots. Please try again later.');
      console.error('Error fetching jackpots:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Function to contribute to a jackpot
  const contributeToJackpot = useCallback(async (jackpotId: number, amount: number) => {
    try {
      setError(null);
      const response = await jackpotService.contributeToJackpot(jackpotId, amount);
      
      // Refresh all jackpots to get the latest state
      await refreshJackpots();

      // Handle jackpot reset notification
      if (response.wasReset) {
        setResetMessage(response.message || `Jackpot was reset to seed value!`);
        setHighlightedJackpotId(jackpotId);
        
        // Clear highlight after 3 seconds
        setTimeout(() => {
          setHighlightedJackpotId(null);
          setResetMessage(null);
        }, 3000);
      }
    } catch (err) {
      setError('Failed to contribute to jackpot. Please try again.');
      console.error('Error contributing to jackpot:', err);
    }
  }, [refreshJackpots]);

  // Load jackpots on initial render
  useEffect(() => {
    refreshJackpots();
  }, [refreshJackpots]);

  return {
    jackpots,
    loading,
    error,
    resetMessage,
    highlightedJackpotId,
    refreshJackpots,
    contributeToJackpot
  };
};
