import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Offer } from '../../types/offer';

import { Loader } from '../OffersPage/Loader/Loader';
import AboutHeader from './AboutHeader/AboutHeader';
import AboutMain from './AboutMain/AboutMain';

const AboutOfferPage:React.FC = () => {
  const { currentOffer, loading } = useTypedSelector(state => state.offer);
  const savedOffer = JSON.parse(localStorage.getItem('offer')!) as Offer;
  const data = currentOffer || savedOffer;

  useEffect(() => {
    localStorage.setItem('offer', JSON.stringify(data));
  }, );

  return (
    (loading) ? <Loader /> :
     <>
      <AboutHeader data={data} />
      <AboutMain data={data} />
     </>
  );
}

export  default AboutOfferPage;
