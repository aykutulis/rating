import React from 'react';

import styles from './Star.module.css';
import { StarData } from '../../types';

interface StarProps {
  data: StarData;
  onClickStar: (id: string) => void;
}

export const Star: React.FC<StarProps> = ({ data, onClickStar }) => (
  <span className={styles.star} onClick={() => onClickStar(data.id)}>
    {data.active ? '★' : '☆'}
  </span>
);
