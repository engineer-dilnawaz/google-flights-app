import { SearchAirport } from "../types/search-airports";

export const mapApiResponseToSuggestedPlaces = (
  data: any[]
): SearchAirport[] => {
  return data.map((item) => ({
    code: item.skyId,
    city: item.presentation?.title ?? item.navigation?.localizedName,
    country: item.presentation?.subtitle ?? "",
    airport: item.presentation?.suggestionTitle ?? "",
  }));
};
