import { create } from "zustand"
import { dataType, dataItems } from '../data/DataInfo';


interface infoItemType {
    dataStates: dataType[];
    displayBtn: () => void;
}

export const useInfoStore = create<infoItemType>()((set) => ({
    dataStates: dataItems,

    displayBtn: () => set((state) => ({
        dataStates: state.dataStates
    })),
}));