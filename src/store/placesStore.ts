// zustand store (usePlacesStore.ts)
import { create } from "zustand";

export type PlacesState = {
  from: string;
  to: string;
  departureDate?: Date;
  range: {
    startDate?: Date;
    endDate?: Date;
  };

  // Travellers fields
  cabinClass: string;
  adults: number;
  children: number;
  childrenAges: string[];
  directFlights: boolean;

  // Actions
  setFrom: (value: string) => void;
  setTo: (value: string) => void;
  swapPlaces: () => void;
  setDepartureDate: (date?: Date) => void;
  setRange: (startDate?: Date, endDate?: Date) => void;
  resetDates: () => void;
  setDirectFlights: (value: boolean) => void;

  setCabinClass: (value: string) => void;
  setAdults: (count: number) => void;
  setChildren: (count: number) => void;
  setChildrenAges: (ages: string[]) => void;
};

export const usePlacesStore = create<PlacesState>((set, get) => ({
  from: "",
  to: "",
  departureDate: undefined,
  range: {
    startDate: undefined,
    endDate: undefined,
  },

  cabinClass: "Economy",
  adults: 1,
  children: 0,
  childrenAges: [],
  directFlights: false,

  setFrom: (value) => set({ from: value }),
  setTo: (value) => set({ to: value }),
  swapPlaces: () => {
    const { from, to } = get();
    set({ from: to, to: from });
  },
  setDepartureDate: (date) => set({ departureDate: date }),
  setRange: (startDate, endDate) => set({ range: { startDate, endDate } }),
  resetDates: () =>
    set({
      departureDate: undefined,
      range: { startDate: undefined, endDate: undefined },
    }),

  setCabinClass: (value) => set({ cabinClass: value }),
  setAdults: (count) => set({ adults: count }),
  setChildren: (count) => {
    const prevChildren = get().children;
    const prevAges = get().childrenAges;
    const updatedAges =
      count > prevChildren
        ? [...prevAges, ...Array(count - prevChildren).fill("<1")]
        : prevAges.slice(0, count);
    set({ children: count, childrenAges: updatedAges });
  },
  setChildrenAges: (ages) => set({ childrenAges: ages }),
  setDirectFlights: (value: boolean) => set({ directFlights: value }),
}));
