// apiConstants.ts

import { API_KEY } from "../utils/enviroment-keys";
import { RAPID_API_HOST } from "./config";

export const BASE_URL = "https://sky-scrapper.p.rapidapi.com";

export const ENDPOINTS = {
  getConfig: "/api/v1/getConfig",
  searchFlights: "/api/v2/flights/searchFlights",
  getPriceCalendar: "/api/v1/flights/getPriceCalendar",
  getFlightDetails: "/api/v1/flights/getFlightDetails",
};

export const HEADERS = {
  "x-rapidapi-key": API_KEY,
  "x-rapidapi-host": RAPID_API_HOST,
};
