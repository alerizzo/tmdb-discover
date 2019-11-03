import React, { useEffect } from 'react';
import { useInput } from '../lib/hooks';

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

  console.log('render RatingBetween');

  const RatingSelect = ({ field, ratings }) => (
    <div className="select is-fullwidth">
      <select {...field}>
        {ratings.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="RatingBetween">
      <RatingSelect field={gte} ratings={gteRatings} />
      <RatingSelect field={lte} ratings={lteRatings} />
    </div>
  );
};

export default RatingBetween;
