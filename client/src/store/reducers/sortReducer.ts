import { SortAction, SortActionTypes, SortState } from "../../types/sort";

const initialState = {
  param: 'all',
  rate: false,
  credit: false,
}

export const sortReducer = (state: SortState = initialState, action: SortAction): SortState => {
  switch (action.type) {
    case SortActionTypes.SET_SORT_PARAM:
      return { ...state, param: action.payload };

    case SortActionTypes.SET_BTN_CLASS:
      return { ...state, rate: action.rate, credit: action.credit};

    default:
      return state;
  }
};
