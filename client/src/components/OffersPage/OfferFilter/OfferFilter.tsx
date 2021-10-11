import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { Bank } from "./Bank/Bank";
import { Amount } from "./Amount/Amount";
import { Term } from "./Term/Term";

import styles from './OfferFilter.module.scss';

 const OfferFilter: React.FC = () => {
  const { bankName, termTo} = useTypedSelector(state => state.filter)
  const { banks, term } = useTypedSelector(state => state.offer)

  return (
    <div className={styles.container}>
      <Bank banks={banks!} bankName={bankName!}/>
      <Amount />
      <Term term={term!} termTo={termTo!}/>
    </div>
  );
 }

 export default OfferFilter;
