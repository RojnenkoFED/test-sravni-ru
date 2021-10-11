export interface OfferState {
  offers: Offer[];
  loading: boolean;
  error: null | string;
  currentOffer?: Offer;
  shown: number;
  isMediaQuery: boolean;
  banks?: string[];
  term?: number[];
}

export interface Offer {
  id: string;
  name: string;
  alias: string;
  organization: Organization;
  customerRequirements: CustomerRequirements;
  rate: Rate;
}

export interface Organization {
  name: string;
  license: string;
  logo: string;
}

export interface CustomerRequirements {
  documents: number;
  age: number;
  manAgeAtRepayment: number;
  femaleAgeAtRepayment: number;
  lastExperience: number;
  fullExperience: number;
  salary: number;
}

export interface Rate {
  periods: [
    {
      rate: {
        from: number;
        to: number;
      };
      termUnit: string;
      term: {
        from: number;
        to: number;
      };
      isFloatingRate: boolean;
    }
  ];
  currency: string;
  creditAmount: {
    from: number;
    to: number;
  };
  initialAmount: {
    from: number;
    to: number;
  };
}

export enum OfferActionTypes {
  FETCH_OFFERS = 'FETCH_OFFERS',
  FETCH_SUCCESS_OFFERS = 'FETCH_SUCCESS_OFFERS',
  FETCH_ERROR_OFFERS = 'FETCH_ERROR_OFFERS',
  SET_SHOWED_OFFERS = 'SET_SHOWED_OFFERS',
  SET_CURRENT_OFFER = 'SET_CURRENT_OFFER',
  FETCH_MEDIA_QUERY = 'FETCH_MEDIA_QUERY',
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

interface SetShowedOffersAction {
  type: OfferActionTypes.SET_SHOWED_OFFERS;
  payload: number;
}

interface SetCurrentOfferAction {
  type: OfferActionTypes.SET_CURRENT_OFFER;
  payload: Offer;
}
interface FetchMediaQuery {
  type: OfferActionTypes.FETCH_MEDIA_QUERY;
  payload: boolean;
}

export type OfferAction = FetchOffersAction
                        | FetchOffersSuccessAction
                        | FetchOffersErrorAction
                        | SetShowedOffersAction
                        | FetchMediaQuery
                        | SetCurrentOfferAction;


