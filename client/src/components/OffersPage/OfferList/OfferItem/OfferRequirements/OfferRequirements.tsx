import styles from './OfferRequirements.module.scss';

type OfferRequirementsProps = {
  rateFrom: number;
  customerAge: number;
  lastExperience: number;
  documentsCount: number;
  mediaQuery: boolean;
}

const OfferRequirements = (props: OfferRequirementsProps) => {
  const { customerAge, lastExperience, documentsCount, mediaQuery, rateFrom } = props;
  const rateFromFormatted = rateFrom.toString().replace('.', ',');
  return (
    <>
      {
        !mediaQuery ?
        <div className={styles.container}>
          <div><span>Возраст от {customerAge} года</span></div>
          <div><span>Стаж от {lastExperience} месяцев</span></div>
          <div><span>{documentsCount} документа</span></div>
        </div> :
        <div className={styles.container}>
          <div className={styles.rate}>Ставка</div>
          <span>{rateFromFormatted}%</span>
        </div>
      }
    </>
  );
}

export default OfferRequirements;
