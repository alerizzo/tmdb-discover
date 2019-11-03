import React, { useEffect } from 'react';
import { useInput } from '../lib/hooks';
import { Select } from './';

const RatingBetween = ({ onChange, initialValue }) => {
  const gte = useInput(initialValue.gte);
  const lte = useInput(initialValue.lte);

  const step = 0.5;

  const minimumRating = 1 / step;
  const maximumRating = 10 / step;

  useEffect(() => {
    onChange &&
      onChange({
        'vote_average.gte': gte.value,
        'vote_average.lte': lte.value,
      });
  }, [gte.value, lte.value, onChange]);

  const gteRatings = new Array(lte.value / step - minimumRating)
    .fill(null)
    .map((n, idx) => (minimumRating + idx) * step);

  const lteRatings = new Array(maximumRating - gte.value / step)
    .fill(null)
    .map((n, idx) => (maximumRating - idx) * step);

  return (
    <div className="RatingBetween">
      <Select field={gte} values={gteRatings} />
      <Select field={lte} values={lteRatings} />
    </div>
  );
};

export default RatingBetween;
