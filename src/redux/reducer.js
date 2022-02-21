import { DATA,SHOW_DATA } from "./actionTypes";


const initialState = {
  allData: {
      showAllData:[]
  }
};

export const reducer = (store = initialState, {type,payload}) => {
  switch (type) {
    case DATA:
      return { ...store,allData:{...store.allData,showAllData:payload} };
    case SHOW_DATA:
      return { ...store,allData:{...store.allData,showAllData:payload} };
    default:
      return store;
  }
};
