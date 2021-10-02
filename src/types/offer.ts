export type OfferState = {
  offers: Offer[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export interface Offer {
  name: string;
  alias: string;
  organization: {};
  customerRequirements: {};
  rate: {};
}

export enum OfferActionTypes {
  FETCH_OFFERS = 'FETCH_OFFERS',
  FETCH_SUCCESS_OFFERS = 'FETCH_SUCCESS_OFFERS',
  FETCH_ERROR_OFFERS = 'FETCH_ERROR_OFFERS',
  SET_OFFER_PAGE = 'SET_OFFER_PAGE',
}

interface FetchOffersAction {
  type: OfferActionTypes.FETCH_OFFERS;
}

interface FetchOffersSuccessAction {
  type: OfferActionTypes.FETCH_SUCCESS_OFFERS;
  payload: any[];
}

interface FetchOffersErrorAction {
  type: OfferActionTypes.FETCH_ERROR_OFFERS;
  payload: string;
}

interface SetOfferPageAction {
  type: OfferActionTypes.SET_OFFER_PAGE;
  payload: number;
}

export type OfferAction = FetchOffersAction
                        | FetchOffersSuccessAction
                        | FetchOffersErrorAction
                        | SetOfferPageAction;

