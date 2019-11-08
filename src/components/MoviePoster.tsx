import React, { memo, useContext, FunctionComponent } from 'react';
import AppContext from '../AppContext';

type MoviePosterProps = { movie: any };

const MoviePoster: FunctionComponent<MoviePosterProps> = memo(({ movie }) => {
  const appContext = useContext(AppContext);

  const getPosterURL = (path: string, size: number) => {
    if (appContext) {
      return `${appContext.secure_base_url}${appContext.poster_sizes[size]}${path}`;
    }

    return '';
  };

  return (
    <div className="MoviePoster">
      <figure className="image is-2by3">
        {movie.poster_path ? (
          <img alt={movie.title} src={getPosterURL(movie.poster_path, 3)} />
        ) : (
          <img
            alt={movie.title}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        )}
      </figure>
      <div className="MoviePoster-body">
        <small className="MoviePoster-rating">
          <strong>{movie.vote_average}</strong>
          <span> of {movie.vote_count} votes</span>
        </small>
        <strong className="MoviePoster-title">
          {movie.title.length > 30 ? `${movie.title.substr(0, 30)}...` : movie.title}
          <span>{movie.release_date && ` (${movie.release_date.substr(0, 4)})`}</span>
        </strong>
      </div>
    </div>
  );
});

export default MoviePoster;
