import { SearchFlightsResponse } from "../types/searched-flights-response";
import apiClient from "./apiClient";

export const searchFlightsService = async (params: {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId?: string;
  destinationEntityId?: string;
  cabinClass: string;
  adults: string | number;
  sortBy?: string;
  currency: string;
  market: string;
  countryCode: string;
  date: string;
}): Promise<SearchFlightsResponse> => {
  const response = await apiClient.get<SearchFlightsResponse>(
    "/api/v2/flights/searchFlights",
    {
      params,
    }
  );
  return response.data;
};
