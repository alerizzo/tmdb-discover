import React, { useEffect } from 'react';
import { useInput } from '../lib/hooks';

const ReleasedBetween = ({ onChange, initialValue }) => {
  const gte = useInput(initialValue.gte.substr(0, 4) * 1);
  const lte = useInput(initialValue.lte.substr(0, 4) * 1);

  const minimumYear = 1900;
  const maximumYear = new Date().getFullYear() * 1;

  useEffect(() => {
    onChange &&
      onChange({
        'primary_release_date.gte': `${gte.value}-01-01`,
        'primary_release_date.lte': `${lte.value}-12-31`,
      });
  }, [gte.value, lte.value, onChange]);

  const gteYears = new Array(lte.value - minimumYear).fill(null).map((n, idx) => minimumYear + idx);
  const lteYears = new Array(maximumYear - gte.value).fill(null).map((n, idx) => maximumYear - idx);

  console.log('render ReleasedBetween');

  const YearSelect = ({ field, years }) => (
    <div className="select is-fullwidth">
      <select {...field}>
        {years.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="ReleasedBetween">
      <YearSelect field={gte} years={gteYears} />
      <YearSelect field={lte} years={lteYears} />
    </div>
  );
};

export default ReleasedBetween;
