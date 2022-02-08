import React from 'react';

import styles from './Rating.module.css';
import { StarData } from '../../types';
import { Star } from '..';

interface RatingProps {
  stars: StarData[];
  onClickStar: (id: string) => void;
}

export const Rating: React.FC<RatingProps> = ({ stars, onClickStar }) => (
  <div className={styles.rating}>
    {stars.map((star) => (
      <Star key={star.id} data={star} onClickStar={onClickStar} />
    ))}
  </div>
);
