import { create } from "zustand";
import { infoStates, statesInfo } from "../data/data";

interface SliderState {
    infoState: statesInfo[];
}

export const useSliderStore = create<SliderState>()((set) => ({
    infoState: infoStates,
}))