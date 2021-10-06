import { SortAction, SortActionTypes } from "../../types/sort";

export const setSortParam = (param: string): SortAction  => {
  return { type: SortActionTypes.SET_SORT_PARAM, payload: param };
}

export const setButtonsClass = (rate: boolean, credit: boolean): SortAction => {
  return { type: SortActionTypes.SET_BTN_CLASS, rate: rate, credit: credit };
}
