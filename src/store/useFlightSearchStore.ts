import { create } from "zustand";
import { searchFlightsService } from "~/src/services/flightService";
import { SearchFlightsResponse } from "~/src/types/searched-flights-response";

type SearchFlightsParams = Parameters<typeof searchFlightsService>[0];

interface FlightSearchState {
  data: SearchFlightsResponse | null;
  loading: boolean;
  error: string | null;
  searchFlights: (
    params: SearchFlightsParams
  ) => Promise<SearchFlightsResponse | void>;
  clearData: () => void;
}

export const useFlightSearchStore = create<FlightSearchState>((set) => ({
  data: null,
  loading: false,
  error: null,

  searchFlights: async (params) => {
    set({ loading: true, error: null });
    try {
      const response = await searchFlightsService(params);
      set({ data: response, loading: false });
      return response;
    } catch (err: any) {
      set({ error: err.message || "Unknown error", loading: false });
      // Re-throw error to allow caller to handle if needed
      throw err;
    }
  },

  clearData: () => set({ data: null, error: null }),
}));
