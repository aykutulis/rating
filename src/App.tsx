import React from 'react';

import styles from './App.module.css';
import { Rating } from './components';
import { useStars } from './hooks';

export const App: React.FC = () => {
  const { stars, onClickStar } = useStars();

  return (
    <main className={styles.wrapper}>
      <Rating stars={stars} onClickStar={onClickStar} />
    </main>
  );
};
