import apiClient from "./apiClient";

export const searchPlaces = async (query: string) => {
  const response = await apiClient.get("/flights/auto-complete", {
    params: { query },
  });
  return response.data.Places;
};

export const createSession = async (payload: {
  originPlace: string;
  destinationPlace: string;
  outboundDate: string;
  adults: number;
  country: string;
  currency: string;
  locale: string;
  inboundDate?: string;
}) => {
  const response = await apiClient.post("/flights/create-session", payload);
  return response.data; // Should contain session key
};

export const pollSessionResults = async (sessionKey: string) => {
  const response = await apiClient.get(`/flights/poll-session/${sessionKey}`);
  return response.data; // Contains flight results
};

export const getFlightDetails = async (params: {
  origin: string;
  destination: string;
  departDate: string;
  returnDate?: string;
  adults: number;
}) => {
  const response = await apiClient.get("/flights/search-roundtrip", {
    params,
  });
  return response.data;
};
