import React, { useState, useCallback } from 'react';
import { Page, DiscoveryPanel, MoviesList } from '../components';
import { discoverMovies } from '../lib/TMDbClient';

const DiscoverPage = props => {
  const [movies, setMovies] = useState(null);

  const handleDiscovery = useCallback(async options => {
    try {
      const movies = await discoverMovies(options);
      movies['params'] = options;

      console.dir(movies);
      setMovies(movies);
    } catch (err) {
      console.dir(err);
    }
  }, []);

  console.log('render - DiscoverPage');

  return (
    <Page title="Discover movies">
      <h1 className="title">Discover movies</h1>
      <div className="columns">
        <div className="column is-3">
          <DiscoveryPanel onSearch={handleDiscovery} />
        </div>
        <div className="column">
          <MoviesList movies={movies} />
        </div>
      </div>
    </Page>
  );
};

export default DiscoverPage;
