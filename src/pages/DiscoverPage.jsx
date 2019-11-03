import React, { useState, useCallback } from 'react';
import { Page, DiscoveryPanel, MoviesList } from '../components';
import { discoverMovies } from '../lib/TMDbClient';
import InfiniteScroll from 'react-infinite-scroller';

const DiscoverPage = props => {
  const [movies, setMovies] = useState(null);

  const handleDiscovery = useCallback(async options => {
    try {
      const res = await discoverMovies(options);
      res['params'] = options;

      setMovies(res);
    } catch (err) {
      console.dir(err);
    }
  }, []);

  const handleLoadMore = useCallback(async () => {
    try {
      const options = movies['params'];
      const res = await discoverMovies({ ...options, page: movies.page + 1 });

      setMovies({ ...movies, page: res.page, results: [...movies.results, ...res.results] });
    } catch (err) {
      console.dir(err);
    }
  }, [movies]);

  return (
    <Page title="Discover movies">
      <h1 className="title">Discover movies</h1>
      <div className="columns">
        <div className="column is-3">
          <DiscoveryPanel onSearch={handleDiscovery} />
        </div>
        <div className="column">
          <InfiniteScroll
            pageStart={0}
            loadMore={handleLoadMore}
            hasMore={movies && movies.page <= movies.total_pages}
            loader={<div className="loader" key={0} />}>
            <MoviesList movies={movies} />
          </InfiniteScroll>
        </div>
      </div>
    </Page>
  );
};

export default DiscoverPage;
