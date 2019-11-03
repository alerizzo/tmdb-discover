import React from 'react';
import { MoviePoster, BigMessage } from './';

const MoviesList = ({ movies }) => {
  if (!movies) {
    return null;
  }

  if (movies.results.length === 0) {
    return (
      <BigMessage>
        Oops... No movies found.
        <span role="img" aria-label="sad face">
          😥
        </span>
      </BigMessage>
    );
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
    </div>
  );
};

export default MoviesList;
