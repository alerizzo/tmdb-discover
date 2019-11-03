import React from 'react';
import { MoviePoster } from './';

const MoviesList = ({ movies }) => {
  console.log('render MoviesList');

  if (!movies) {
    return null;
  }

  return (
    <div className="MoviesList">
      <div className="columns is-multiline is-mobile">
        {movies.results.map(movie => (
          <div
            key={movie.id}
            className="column is-3-desktop is-4-tablet is-6-mobile is-3-widescreen is-one-fifth-fullhd">
            <MoviePoster movie={movie} />
          </div>
        ))}
      </div>
      <p>
        {movies.total_results === 10000 && '+'}
        {movies.total_results} results
      </p>
    </div>
  );
};

export default MoviesList;
