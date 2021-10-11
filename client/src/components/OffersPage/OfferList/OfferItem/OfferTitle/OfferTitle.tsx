import styles from './OfferTitle.module.scss';

type OfferTitleProps = {
  rateFrom: number;
  rateTo: number;
  offerName: string;
}

const OfferTitle = (props: OfferTitleProps) => {
  const { rateFrom, rateTo, offerName } = props;
  const rateFromFormatted = rateFrom.toString().replace('.', ',');
  const rateToFormatted = rateTo.toString().replace('.', ',');


  return (
    <div className={styles.container}>
      <div className={styles.rate} aria-label="Ставка">
        от&nbsp;
        {
          (rateFromFormatted === rateToFormatted ) ?
          <span>{rateFromFormatted}%</span>:
          <><span>{rateFromFormatted}%</span> до&nbsp;<span>{rateToFormatted}%</span></>
        }
      </div>
      <div className={styles.name}>{offerName}</div>
    </div>
  );
}

export default OfferTitle;
