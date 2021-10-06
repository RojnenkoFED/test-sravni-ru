import React, { useEffect } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Offer  } from "../../../types/offer";
import { FilterState } from "../../../types/filter";

import styles from "./OfferList.module.scss";

import OfferItem from "./OfferItem/OfferItem";
import PaginationButton from "./PaginationButton/PaginationButton";
import { creditAmountSort, rateSort } from "../../../store/utils/sort";

const OfferList: React.FC = () => {
  const { filter, offer: {shown, offers, isMediaQuery, loading }, sort} = useTypedSelector( state => ({ ...state }));
  const { fetchOffers, fetchMediaQuery } = useActions();

  useEffect(() => {
    fetchOffers();
  }, [shown]);

  const mobile = window.matchMedia("(max-width: 1024px)");
  mobile.addEventListener("change", (e) => {
    if ((e.matches || !e.matches) && isMediaQuery !== e.matches) {
      fetchMediaQuery(e.matches);
    }
  });

  const OffersFilter = (data: any[], filters: FilterState = {}): Offer[] => {
    if (!filters.bankName && !filters.initialAmount && !filters.termTo) {
      return data;
    }

    const filterValues = Object.values(filters);
    return data.filter((offer: Offer) => {
      const { organization: { name },
              rate: { initialAmount: { from }, periods: [{ term: { to }}] } } = offer;
      const currentValues = [ name, from, to ];
      return filterValues.every((value) => {
        let status = false;
        if (typeof value === 'string') {
          if (filters.hasOwnProperty('initialAmount') && from <= +value) {
            status = true;
          } else if (filters.hasOwnProperty('bankName')) {
            status = currentValues.includes(value);
          }
        } else if (typeof value === 'number' && (to <= value * 12)) {
          status = true;
        }
        return status;
      });
    });
  }

  const OffersSort = (offers: Offer[], sort: string) => {
    switch(sort) {
      case 'all':
        return offers;
      case 'rate':
        return rateSort(offers);
      case 'creditAmount':
        return creditAmountSort(offers);
      default:
        return offers;
    }
  }


  const filteredOffers = OffersSort(OffersFilter(offers, filter), sort.param);
  return (
    <>
      <ul className={styles.list}>
        {(!filteredOffers.length && !loading) ?
        <h2 className={styles.error}>К сожалению, таких предложений нет ;(</h2> : null}
        {filteredOffers
          .map((offer) => {
            return (
              <li className={styles.item} key={offer.id}>
                <OfferItem offer={offer} />
                <div className={styles.row}>
                  <div className={styles.border}></div>
                  <div className={styles.license}>
                    лиц.&nbsp;№ {offer.organization.license}
                  </div>
                </div>
              </li>
            );
          })
          .filter((item, index) => index < shown)}
      </ul>
      {
        (filteredOffers.length > shown ) ?
        <PaginationButton length={filteredOffers.length}/> : null
      }
    </>
  );
};

export default OfferList;
