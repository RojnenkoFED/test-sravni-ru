import { FilterAction, FilterActionTypes, FilterState } from "../../types/filter";
import { removeProp } from "../utils/filter";

const initialState = {
}

export const filterReducer = (state: FilterState = initialState, action:FilterAction): FilterState => {
  switch (action.type) {
    case FilterActionTypes.FETCH_FILTER:
      return { ...state };

    case FilterActionTypes.SET_BANK_FILTER:
      if (action.payload === '') {
        return removeProp('bankName', state);
      }
      return { ...state, bankName: action.payload };

    case FilterActionTypes.SET_AMOUNT_FILTER:
      return { ...state, initialAmount: action.payload};

    case FilterActionTypes.DELETE_AMOUNT_FILTER:
      console.log(state);
      return removeProp('initialAmount', state);

    case FilterActionTypes.SET_TERM_FILTER:
      if (action.payload === 0) {
        return removeProp('termTo', state);
      }
      return { ...state, termTo: action.payload};

    default:
      return state;
  }
};
