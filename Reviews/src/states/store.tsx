import { create } from "zustand";
import { infoItems, InfoType } from "../components/InfoItems";

interface ınfoItemState {
    infoStates: InfoType[];
    index: number;
    //  handleInfoStates: (index: number) => void;
    increase: () => void;
    decrease: () => void;
}


export const useInfoStore = create<ınfoItemState>()((set) => ({
    infoStates: infoItems,
    index: 0,

    //   handleInfoStates: (index: number) => set((state) => ({ ...state, index, infoStates: state.infoStates })),

    increase: () => set((state) => ({
        index: (state.index + 1) % state.infoStates.length,
        infoStates: state.infoStates,
    })),

    decrease: () => set((state) => ({
        index: (state.index - 1 + state.infoStates.length) % state.infoStates.length,
        infoStates: state.infoStates,
    })),
}));