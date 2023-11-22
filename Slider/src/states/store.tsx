import { create } from "zustand";
import { infoStates, statesInfo } from "../data/data";

interface SliderState {
    infoState: statesInfo[];
    index: number;
    increase: () => void;
    decrease: () => void;
    loadingIndex: () => void;
}

export const useSliderStore = create<SliderState>()((set) => ({
    infoState: infoStates,
    index: 0,

    increase: () => set((state) => ({
        index: (state.index + 1) % state.infoState.length,
    })),
    decrease: () => set((state) => ({
        index: (state.index - 1 + state.infoState.length) % state.infoState.length,
    })),

    loadingIndex: () => {
        setTimeout(() => {
            set((state) => ({
                index: (state.index + 1) % state.infoState.length,
            }));
        }, 3000);
    },
}))