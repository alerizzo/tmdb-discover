import React, { useEffect } from 'react';
import { useInput } from '../lib/hooks';

const SortBySelect = ({ onChange, initialValue }) => {
  const sortBy = useInput(initialValue);

  useEffect(() => {
    onChange && onChange({ sort_by: sortBy.value });
  }, [sortBy.value, onChange]);

  const options = [
    { value: 'popularity', label: 'Popularity' },
    { value: 'revenue', label: 'Revenue' },
    { value: 'primary_release_date', label: 'Release date' },
    { value: 'vote_average', label: 'Rating' },
    { value: 'vote_count', label: 'Votes' },
  ];

  const orders = [{ value: 'asc', label: 'Ascending' }, { value: 'desc', label: 'Descending' }];

  const items = options.reduce(
    (acc, option) => [
      ...acc,
      ...orders.reduce(
        (acc, order) => [
          ...acc,
          {
            value: `${option.value}.${order.value}`,
            label: `${option.label} (${order.label})`,
          },
        ],
        []
      ),
    ],
    []
  );

  console.log('render SortBySelect');

  return (
    <div className="SortBySelect select is-fullwidth">
      <select {...sortBy}>
        {items.map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBySelect;
