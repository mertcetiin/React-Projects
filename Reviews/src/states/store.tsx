import { create } from "zustand";
import { infoItems, InfoType } from "../components/InfoItems";

interface ınfoItemState {
    infoStates: InfoType[];
}


export const useInfoStore = create<ınfoItemState>()((set) => ({
    infoStates: infoItems,
}))