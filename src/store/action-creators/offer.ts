import { Dispatch } from 'react';
import { OfferAction, OfferActionTypes } from '../../types/offer';

import data from '../../backend/data'

export const fetchOffers = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<OfferAction>) => {
    try {
      dispatch({ type: OfferActionTypes.FETCH_OFFERS });
      setTimeout(() => {
        dispatch({ type: OfferActionTypes.FETCH_SUCCESS_OFFERS, payload: data });
      }, 500);
    } catch (e) {
      dispatch({ type: OfferActionTypes.FETCH_ERROR_OFFERS, payload: 'Ошибка загрузки финансовых предложений' });
    }
  }
}

export const setTodoPage = (page: number): OfferAction  => {
  return { type: OfferActionTypes.SET_OFFER_PAGE, payload: page };
}
