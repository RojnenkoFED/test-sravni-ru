import styles from './OfferLogo.module.scss';

type OfferLogoProps = {
  src: string;
  organizationName: string;
}

const OfferLogo = (props: OfferLogoProps) => {
  const { src, organizationName } = props;
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={src} alt={'Логотип банка ' + organizationName} />
    </div>
  );
}

export default OfferLogo
