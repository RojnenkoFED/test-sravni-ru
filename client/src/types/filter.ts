export interface FilterState {
  bankName?: string;
  initialAmount?: string;
  termTo?: number;
}

export enum FilterActionTypes {
  FETCH_FILTER = 'FETCH_FILTER',
  SET_BANK_FILTER = 'SET_BANK_FILTER',
  SET_AMOUNT_FILTER = 'SET_AMOUNT_FILTER',
  SET_TERM_FILTER = 'SET_TERM_FILTER',
  DELETE_AMOUNT_FILTER = 'DELETE_AMOUNT_FILTER',
}

interface FetchFilterAction {
  type: FilterActionTypes.FETCH_FILTER;
}

interface SetBankFilterAction {
  type: FilterActionTypes.SET_BANK_FILTER;
  payload: string;
}

interface SetAmountFilterAction {
  type: FilterActionTypes.SET_AMOUNT_FILTER;
  payload: string;
}

interface SetTermFilterAction {
  type: FilterActionTypes.SET_TERM_FILTER;
  payload: number;
}

interface DeleteAmountFilterAction {
  type: FilterActionTypes.DELETE_AMOUNT_FILTER;
}

export type FilterAction = FetchFilterAction
                        | SetBankFilterAction
                        | SetAmountFilterAction
                        | SetTermFilterAction
                        | DeleteAmountFilterAction;


