import React, { useEffect } from 'react';
import { useInput } from '../lib/hooks';
import { Select } from './';

const VoteCountBetween = ({ onChange, initialValue }) => {
  const gte = useInput(initialValue.gte);
  const lte = useInput(initialValue.lte);

  const step = 2000;

  const minimumVoteCount = 0;
  const maximumVoteCount = 30000 / step;

  useEffect(() => {
    onChange &&
      onChange({
        'vote_count.gte': gte.value,
        'vote_count.lte': lte.value,
      });
  }, [gte.value, lte.value, onChange]);

  const gteValues = new Array(lte.value / step - minimumVoteCount)
    .fill(null)
    .map((n, idx) => (minimumVoteCount + idx) * step);

  const lteValues = new Array(maximumVoteCount - gte.value / step)
    .fill(null)
    .map((n, idx) => (maximumVoteCount - idx) * step);

  return (
    <div className="VoteCountBetween">
      <Select field={gte} values={gteValues} />
      <Select field={lte} values={lteValues} />
    </div>
  );
};

export default VoteCountBetween;
