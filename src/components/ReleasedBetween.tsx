import React, { useEffect, FunctionComponent } from 'react';
import { useInput } from '../lib/hooks';
import { Select } from './';

type ReleasedBetweenProps = { onChange: Function; initialValue: { gte: string; lte: string } };

const ReleasedBetween: FunctionComponent<ReleasedBetweenProps> = ({ onChange, initialValue }) => {
  const gte = useInput(initialValue.gte.substr(0, 4));
  const lte = useInput(initialValue.lte.substr(0, 4));

  const minimumYear = 1900;
  const maximumYear = new Date().getFullYear();

  useEffect(() => {
    onChange &&
      onChange({
        'primary_release_date.gte': `${gte.value}-01-01`,
        'primary_release_date.lte': `${lte.value}-12-31`,
      });
  }, [gte.value, lte.value, onChange]);

  const gteValues = new Array(parseInt(lte.value) - minimumYear)
    .fill(null)
    .map((n, idx) => minimumYear + idx);
  const lteValues = new Array(maximumYear - parseInt(gte.value))
    .fill(null)
    .map((n, idx) => maximumYear - idx);

  return (
    <div className="ReleasedBetween">
      <Select field={gte} values={gteValues} />
      <Select field={lte} values={lteValues} />
    </div>
  );
};

export default ReleasedBetween;
