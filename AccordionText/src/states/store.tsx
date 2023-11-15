import { create } from "zustand"
import { dataType, dataItems } from '../data/DataInfo';


interface infoItemType {
    dataStates: dataType[];
    displayBtn: () => void;
    showInfo: { [key: string]: boolean };
    toggleInfo: (itemId: string) => void;
}

export const useInfoStore = create<infoItemType>()((set) => ({
    dataStates: dataItems,
    showInfo: {},

    displayBtn: () => set((state) => ({
        dataStates: state.dataStates
    })),

    toggleInfo: (itemId) => set((state) => ({
        showInfo: {
            ...state.showInfo,
            [itemId]: !state.showInfo[itemId],
        },
    })),
}));