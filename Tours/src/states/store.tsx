import { create } from "zustand";
import { ToursInfo, ToursType } from "../components/ToursInfo";

interface ToursState {
    toursState: ToursType[];
    deleteBtn: (id: number) => void;
    refleshBtn: () => void;
    readMore: boolean;
    handleClickRead: () => void;
}

export const useToursStore = create<ToursState>((set) => ({
    toursState: ToursInfo,
    readMore: false,

    deleteBtn: (id) => set((state) => ({
        toursState: state.toursState.filter((item) => item.id !== id),
    })),

    refleshBtn: () => set({ toursState: ToursInfo }),

    handleClickRead: () => set((state) => ({ readMore: !state.readMore })),
}));
