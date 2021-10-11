import React, { useEffect } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import styles from './OfferSort.module.scss'

const OfferSort: React.FC = () => {
  const { param, rate, credit } = useTypedSelector(state => state.sort);
  const { setSortParam, setButtonsClass } = useActions();

  const buttonsData = [
    {name:'rate', label: 'по ставке'},
    {name:'creditAmount', label: 'по сумме'}
  ];

  const sortButtons = buttonsData.map(({name, label}) => {
    const statusDisabled = (name === 'rate') ? rate : credit;
    return(
      <button
        key={name}
        type="button"
        aria-label="Кнопка сортировки"
        disabled={statusDisabled}
        className={`${styles.button}`}
        onClick={() => setSortParam(name)}>{label}
      </button>
    );
  });

  useEffect(() => {
    if (param === 'rate') {
      setButtonsClass(!rate, false)
    } else if (param === 'creditAmount') {
      setButtonsClass(false, !credit)
    }
  }, [param]);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Сортировать: </span>
      {sortButtons}
    </div>
  );
};

export default OfferSort;
