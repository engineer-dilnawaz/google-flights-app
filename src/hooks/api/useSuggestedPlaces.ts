import { useState } from "react";
import {
  germanyAirportRespose,
  usaAirportResponse,
} from "~/mock/search-airport-response";
import { useSuggestedPlacesStore } from "~/src/store/searchedPlacesStore";
import { PlaceItem } from "~/src/types/place";

type APIResponse = {
  status: boolean;
  data: PlaceItem[];
};

const MOCK_API_DATA: Record<string, APIResponse> = {
  usa: {
    status: usaAirportResponse.status,
    data: usaAirportResponse.data,
  },
  germany: {
    status: germanyAirportRespose.status,
    data: germanyAirportRespose.data,
  },
};

export const useSuggestedPlaces = () => {
  const { setSuggestedPlaces } = useSuggestedPlacesStore();
  const [loading, setLoading] = useState(true);

  const fetchPlaces = async (query: "usa" | "germany") => {
    setLoading(true);

    const lowerQuery = query.toLowerCase();

    const response = MOCK_API_DATA[lowerQuery];

    return new Promise<APIResponse>((resolve, reject) => {
      setTimeout(() => {
        setLoading(false);
        if (response) {
          setSuggestedPlaces(response.data);
          resolve(response);
        } else {
          setSuggestedPlaces([]); // reset in store
          reject({ status: false, data: [] });
        }
      }, 1000);
    });
  };

  return {
    fetchPlaces,
    loading,
  };
};
