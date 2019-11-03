const getQueryString = params => {
  let result = new URLSearchParams();
  for (var key in params) {
    result.append(key, params[key]);
  }

  return result.toString();
};

async function tmdbFetch(path, params) {
  const request = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const requestParams = { ...params, api_key: process.env.REACT_APP_TMDB_API_KEY };

  try {
    const res = await fetch(
      `${process.env.REACT_APP_TMDB_API_URL}${path}?${getQueryString(requestParams)}`,
      request
    );

    if (res.ok) {
      const result = await res.json();
      return result;
    } else {
      throw new Error('TMDb Fetch failed');
    }
  } catch (err) {
    throw err;
  }
}

export async function discoverMovies(params) {
  return tmdbFetch('/discover/movie', params);
}

export async function getTMDbSettings() {
  return tmdbFetch('/configuration', {});
}
