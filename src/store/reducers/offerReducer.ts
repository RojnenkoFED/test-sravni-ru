import { OfferAction, OfferActionTypes, OfferState } from "../../types/offer";

const initialState = {
  offers: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
}

export const offerReducer = (state: OfferState = initialState, action:OfferAction): OfferState => {
  switch (action.type) {
    case OfferActionTypes.FETCH_OFFERS:
      return { ...state, loading: true };

    case OfferActionTypes.FETCH_SUCCESS_OFFERS:
      return { ...state, offers: action.payload };

    case OfferActionTypes.FETCH_ERROR_OFFERS:
      return { ...state, error: action.payload};

    case OfferActionTypes.SET_OFFER_PAGE:
      return { ...state, page: action.payload};

    default:
      return state;
  }
};
