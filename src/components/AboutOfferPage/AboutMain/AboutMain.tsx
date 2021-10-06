import { Offer } from '../../../types/offer';
import styles from './AboutMain.module.scss';

type AboutMainProps = {
  data: Offer;
}

const AboutMain = (props: AboutMainProps) => {
  const { data } = props;
  return (
    <main className={styles.main}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div>Процентная ставка</div>
          <div>{data.rate.periods[0].rate.from}%</div>
        </li>
        <li className={styles.item}>
          <div>Сумма кредита</div>
          <div>{data.rate.creditAmount.from} &#8381; - {data.rate.creditAmount.to} &#8381;</div>
        </li>
        <li className={styles.item}>
          <div>Срок</div>
          <div>{data.rate.periods[0].term.to / 12} лет</div>
        </li>
        <li className={styles.item}>
          <div>Первоначальный взнос</div>
          <div>от {data.rate.initialAmount.from}%</div>
        </li>
        <li className={styles.item}>
          <div>Стаж работы на последнем месте</div>
          <div>{data.customerRequirements.lastExperience} месяцев</div>
        </li>
        <li className={styles.item}>
          <div>Возраст заёмщика</div>
          <div>от {data.customerRequirements.age} лет</div>
        </li>
    </ul>
    </main>
  );
}

export default AboutMain;
