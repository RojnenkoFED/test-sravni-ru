import React from 'react'
import styles from './Loader.module.scss'
import loader from './loader.gif';

export const Loader: React.FC = () => {
  return (
    <div className={styles.popup}>
      <div className={styles.container}>
        <img className={styles.loader} alt="Ожидается загрузка страницы..." src={loader} />
      </div>
    </div>
  );
}
