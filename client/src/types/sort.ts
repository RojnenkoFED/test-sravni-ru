export interface SortState {
  param: string;
  rate: boolean;
  credit: boolean;
}

export enum SortActionTypes {
  SET_SORT_PARAM = 'SET_SORT_PARAM',
  SET_BTN_CLASS = 'SET_BTN_CLASS',
}

export interface SetSortParamAction {
  type: SortActionTypes.SET_SORT_PARAM;
  payload: string;
}

export interface SetButtonClassAction {
  type: SortActionTypes.SET_BTN_CLASS;
  rate: boolean;
  credit: boolean;
}

export type SortAction = SetSortParamAction | SetButtonClassAction;
