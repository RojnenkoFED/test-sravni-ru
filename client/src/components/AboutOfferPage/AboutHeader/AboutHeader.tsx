import { NavLink } from 'react-router-dom';
import { Offer } from '../../../types/offer';
import styles from './AboutHeader.module.scss';

type AboutHeaderProps = {
  data: Offer;
}

const AboutHeader = (props: AboutHeaderProps) => {
  const { data } = props;
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>"{data.name}" от&nbsp;<span>{data.organization.name}</span></h1>
      <nav className={styles.nav}>
        <NavLink to="/">Назад</NavLink>
      </nav>
    </header>
  );
}

export default AboutHeader;
