import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Offer } from "../../types/offer";

import styles from "./OfferList.module.scss";

const OfferList: React.FC = () => {

  const { page, loading, limit, error, offers } = useTypedSelector((state) => state.offer);

  const { fetchOffers } = useActions();
  console.log(offers.);

  useEffect(() => {
    fetchOffers(page, limit);
  }, [page]);

  return(
    <div className={styles.list}></div>
  );
}

export default OfferList;
