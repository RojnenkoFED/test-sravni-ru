import { FilterAction, FilterActionTypes } from '../../types/filter';

export const setBankFilter = (bank: string): FilterAction  => {
  return { type: FilterActionTypes.SET_BANK_FILTER, payload: bank };
}

export const setAmountFilter = (amount: string): FilterAction  => {
  return { type: FilterActionTypes.SET_AMOUNT_FILTER, payload: amount };
}

export const setTermFilter = (term: number): FilterAction  => {
  return { type: FilterActionTypes.SET_TERM_FILTER, payload: term };
}

export const deleteAmoutFilter = (): FilterAction  => {
  return { type: FilterActionTypes.DELETE_AMOUNT_FILTER };
}

