import { create } from "zustand"
import { dataType, dataItems } from '../data/DataInfo';


interface infoItemType {
    dataStates: dataType[];
}

export const useInfoStore = create<infoItemType>()((set) => ({
    dataStates: dataItems,
}));