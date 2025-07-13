import { create } from "zustand";
import { PlaceItem } from "../types/place";

type useSuggestedPlacesStore = {
  suggestedPlaces: PlaceItem[];
  setSuggestedPlaces: (data: PlaceItem[]) => void;
  recentSearches: PlaceItem[];
  setRecentSearches: (place: PlaceItem) => void;
  resetSuggestedPlaces: () => void;
};

export const useSuggestedPlacesStore = create<useSuggestedPlacesStore>(
  (set, get) => ({
    suggestedPlaces: [],
    setSuggestedPlaces: (data) => set({ suggestedPlaces: data }),

    recentSearches: [],

    setRecentSearches: (place) => {
      const { recentSearches } = get();
      const filtered = recentSearches.filter(
        (item) => item.skyId !== place.skyId
      );

      const updated = [place, ...filtered].slice(0, 2); // keep only last 2
      set({ recentSearches: updated });
    },

    resetSuggestedPlaces: () => set({ suggestedPlaces: [] }),
  })
);
