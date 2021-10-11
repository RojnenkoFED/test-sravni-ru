import { OfferAction, OfferActionTypes, OfferState } from "../../types/offer";
import { removeProp } from "../utils/filter";
import { setBanks, setTerms } from "../utils/offer";

const initialState = {
  offers: [],
  loading: false,
  error: null,
  shown: 10,
  isMediaQuery: window.matchMedia('(max-width: 1024px)').matches,
}

export const offerReducer = (state: OfferState = initialState, action:OfferAction): OfferState => {
  switch (action.type) {
    case OfferActionTypes.FETCH_OFFERS:
      return { ...state,
                  loading: true };

    case OfferActionTypes.FETCH_SUCCESS_OFFERS:
      return { ...removeProp('loading', state),
                  offers: action.payload,
                  banks: setBanks(action.payload),
                  term: setTerms(action.payload) };

    case OfferActionTypes.FETCH_ERROR_OFFERS:
      return { ...state,
                  error: action.payload};

    case OfferActionTypes.SET_SHOWED_OFFERS:
      return { ...state,
                  shown: action.payload};

    case OfferActionTypes.SET_CURRENT_OFFER:
      return { ...removeProp('loading', state),
                  currentOffer: action.payload };

    case OfferActionTypes.FETCH_MEDIA_QUERY:
      return { ...state,
                  isMediaQuery: action.payload};
    default:
      return state;
  }
};
