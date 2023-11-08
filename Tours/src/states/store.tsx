import { create } from "zustand";
import { ToursInfo, ToursType } from "../components/ToursInfo";

interface ToursState {
    toursState: ToursType[]
    deleteBtn: (id: number) => void
}

export const useToursStore = create<ToursState>()((set) => ({
    toursState: ToursInfo,

    deleteBtn: (id) => set((state) => ({
        toursState: state.toursState.filter((item) => item.id !== id)
    })),
}))