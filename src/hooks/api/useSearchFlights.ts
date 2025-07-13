import { useCallback, useState } from "react";

import { searchFlightsService } from "~/src/services/flightService";
import { SearchFlightsResponse } from "~/src/types/searched-flights-response";

type SearchFlightsParams = Parameters<typeof searchFlightsService>[0];

export const useSearchFlights = () => {
  const [data, setData] = useState<SearchFlightsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchFlights = useCallback(async (params: SearchFlightsParams) => {
    setLoading(true);
    setError(null);
    try {
      const response = await searchFlightsService(params);
      setData(response);
      setLoading(false);
      return response;
    } catch (err: any) {
      setError(err.message || "Unknown error");
      setLoading(false);
      throw err;
    }
  }, []);

  return { data, loading, error, searchFlights };
};
