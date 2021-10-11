import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import styles from './OffersPage.module.scss';

import OfferList from "./OfferList/OfferList";
import OfferFilter from "./OfferFilter/OfferFilter";
import OfferSort from "./OfferSort/OfferSort";
import { Loader } from "./Loader/Loader";

const OffersPage: React.FC = () => {
  const { offers } = useTypedSelector(state => state.offer);
  const body= document.body;
  const isLoading = !offers.length;

  if (isLoading) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }

  return(
    <div className={styles.container}>
      <section className={styles.header}>
        <h1 className={styles.heading}>Финансовые предложения</h1>
        {(isLoading) ? <Loader /> : <OfferFilter />}
      </section>
      <section>
        {(isLoading) ? null : <OfferSort />}
        <OfferList />
      </section>
    </div>
  );
}

export default OffersPage;
