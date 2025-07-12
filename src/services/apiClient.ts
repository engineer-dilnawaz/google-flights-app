import axios from "axios";

import { BASE_URL, HEADERS } from "./apiConstants";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
});

export default apiClient;
