import { Dispatch } from 'react';
import { OfferAction, OfferActionTypes } from '../../types/offer';

export const fetchOffers = () => {
  return async (dispatch: Dispatch<OfferAction>) => {
    try {
      dispatch({ type: OfferActionTypes.FETCH_OFFERS });
      const responce = await fetch('/api/offers');
      const data = await responce.json();

      dispatch({
        type: OfferActionTypes.FETCH_SUCCESS_OFFERS,
        payload: data
      });
    } catch (e) {
      dispatch({ type: OfferActionTypes.FETCH_ERROR_OFFERS, payload: 'Ошибка загрузки финансовых предложений' });
    }
  }
}

export const fetchCurrentOffer = (id: string) => {
  return async (dispatch: Dispatch<OfferAction>) => {
    try {
      dispatch({ type: OfferActionTypes.FETCH_OFFERS });
      const responce = await fetch(`/api/offers/about/${id}`);
      const currentData = await responce.json();

      dispatch({
        type: OfferActionTypes.SET_CURRENT_OFFER,
        payload: currentData
      });
    } catch (e) {
      dispatch({ type: OfferActionTypes.FETCH_ERROR_OFFERS, payload: 'Ошибка загрузки страницы' });
    }
  }
}

export const setShowedOffers = (shown: number): OfferAction  => {
  return { type: OfferActionTypes.SET_SHOWED_OFFERS, payload: shown };
}

export const fetchMediaQuery = (mq: boolean): OfferAction  => {
  return { type: OfferActionTypes.FETCH_MEDIA_QUERY, payload: mq };
}


