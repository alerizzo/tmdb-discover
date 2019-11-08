import React, { useState, useEffect, useCallback, memo, FunctionComponent } from 'react';
import {
  Field,
  SortBySelect,
  ReleasedBetween,
  RatingBetween,
  VoteCountBetween,
} from '../components';

type DiscoveryPanelProps = { onSearch: Function };

const DiscoveryPanel: FunctionComponent<DiscoveryPanelProps> = memo(({ onSearch }) => {
  const defaultParams: { [key: string]: any } = {
    sort_by: 'popularity.desc',
    'primary_release_date.gte': '1980-01-01',
    'primary_release_date.lte': `${new Date().getFullYear()}-12-31`,
    'vote_average.gte': 7,
    'vote_average.lte': 10,
    'vote_count.gte': 0,
    'vote_count.lte': 30000,
  };

  const [params, setParams] = useState(defaultParams);

  useEffect(() => {
    onSearch && onSearch(params);
  });

  const handleChange = useCallback(
    newParams => {
      let needsUpdate = false;
      for (var param in newParams) {
        needsUpdate = needsUpdate || params[param] !== newParams[param];
      }

      if (needsUpdate) setParams({ ...params, ...newParams });
    },
    [params]
  );

  /*
    
    with_runtime.gte / lte

    IDs
    with_genres
    without_genres

    with_cast
    with_crew
  */

  return (
    <div className="DiscoveryPanel">
      <Field label="Sort by">
        <SortBySelect onChange={handleChange} initialValue={params.sort_by} />
      </Field>
      <Field label="Released between">
        <ReleasedBetween
          onChange={handleChange}
          initialValue={{
            lte: params['primary_release_date.lte'],
            gte: params['primary_release_date.gte'],
          }}
        />
      </Field>
      <Field label="Rating between">
        <RatingBetween
          onChange={handleChange}
          initialValue={{
            lte: params['vote_average.lte'],
            gte: params['vote_average.gte'],
          }}
        />
      </Field>
      <Field label="Vote count between">
        <VoteCountBetween
          onChange={handleChange}
          initialValue={{
            lte: params['vote_count.lte'],
            gte: params['vote_count.gte'],
          }}
        />
      </Field>
    </div>
  );
});

export default DiscoveryPanel;
