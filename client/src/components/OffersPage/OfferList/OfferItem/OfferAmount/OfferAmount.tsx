import styles from './OfferAmount.module.scss';

type OfferAmountProps = {
  creditFrom: number;
  creditTo: number;
  periodFrom: number;
  periodTo: number;
  periodUnit: string;
  mediaQuery: boolean;
}

const OfferAmount = (props: OfferAmountProps) => {
  const { creditFrom, creditTo, periodTo, periodUnit, mediaQuery } = props;

  const valueFormatted = (num: number) => {
    const newString = num.toString().split('');
    newString.splice(-3, 0, ' ');
    newString.splice(-7, 0, ' ');
    return newString.join('').trim();
  }

  let periodToYear = 0;
  if (periodUnit === 'month') {
    if (periodTo % 12 === 0) {
      periodToYear = periodTo / 12;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.credit}>
        {
          (creditTo && mediaQuery) ?
          <span>до {parseInt(valueFormatted(creditTo))} млн&nbsp;&#8381;</span> :
          (creditTo && !mediaQuery ) ?
          <span>
            {valueFormatted(creditFrom)} &#8381; &ndash; {valueFormatted(creditTo)} &#8381;
          </span> :
          <span>от {valueFormatted(creditFrom)} &#8381;</span>
        }
      </div>
      <div className={styles.period}>
        <span>На срок до {periodToYear} {(periodToYear > 1) ?  'лет' : 'года'}</span>
      </div>
    </div>
  );
}

export default OfferAmount;
