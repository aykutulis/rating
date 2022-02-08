import { useState } from 'react';

import { StarData } from '../types';

const defaultState: StarData[] = [
  { id: '1', active: true },
  { id: '2', active: true },
  { id: '3', active: true },
  { id: '4', active: false },
  { id: '5', active: false },
];

export const useStars = () => {
  const [stars, setStars] = useState<StarData[]>(defaultState);

  const onClickStar = (id: string) => {
    const newStars = stars.map((star) => {
      if (star.id <= id) {
        return { ...star, active: true };
      }
      return { ...star, active: false };
    });
    setStars(newStars);
  };

  return { stars, onClickStar };
};
