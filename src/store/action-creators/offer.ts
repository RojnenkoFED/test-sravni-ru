import { Dispatch } from 'react';
import { Offer, OfferAction, OfferActionTypes } from '../../types/offer';

import data from '../../backend/data'

export const fetchOffers = () => {
  return async (dispatch: Dispatch<OfferAction>) => {
    try {
      dispatch({ type: OfferActionTypes.FETCH_OFFERS });
      setTimeout(() => {
        dispatch({
          type: OfferActionTypes.FETCH_SUCCESS_OFFERS,
          payload: data });
      }, 500);
    } catch (e) {
      dispatch({ type: OfferActionTypes.FETCH_ERROR_OFFERS, payload: 'Ошибка загрузки финансовых предложений' });
    }
  }
}

export const setShowedOffers = (shown: number): OfferAction  => {
  return { type: OfferActionTypes.SET_SHOWED_OFFERS, payload: shown };
}

export const fetchMediaQuery = (mq: boolean): OfferAction  => {
  return { type: OfferActionTypes.FETCH_MEDIA_QUERY, payload: mq };
}

export const setCurrentOfferPage = (data: Offer) => {
  return { type: OfferActionTypes.SET_CURRENT_OFFER, payload: data };
}
