import React from 'react';
import OfferList from '../OfferList/OfferList';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <OfferList />
    </div>
  );
}

export default App;
