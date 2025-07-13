import { create } from "zustand";

type PlacesState = {
  from: string;
  to: string;
  departureDate?: Date;
  range: {
    startDate?: Date;
    endDate?: Date;
  };
  setFrom: (value: string) => void;
  setTo: (value: string) => void;
  swapPlaces: () => void;
  setDepartureDate: (date?: Date) => void;
  setRange: (startDate?: Date, endDate?: Date) => void;
  resetDates: () => void;
};

export const usePlacesStore = create<PlacesState>((set, get) => ({
  from: "",
  to: "",
  departureDate: undefined,
  range: {
    startDate: undefined,
    endDate: undefined,
  },
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
}));
