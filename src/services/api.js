import axios from "axios";

const API_KEY = 'a672ae57e08bb16567badfa77d9e520f'; 

export async function getMovieById(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
      try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return;
  }
};

export async function getSeriesById(series_id) {
    const url = `https://api.themoviedb.org/3/tv/${series_id}?api_key=${API_KEY}&language=en-US`;
      try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return;
  }
};

export async function getTrendingAll() {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
  try {
    const resp = await axios.get(url);
    return resp.data.results;
  } catch (error) {
    return;
  }
}

export async function getTrendingMovies() {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
    try {
        const resp = await axios.get(url);
        return resp.data.results;
    } catch (error) {
        return; 
    }   
};


export async function getTrendingSeries() {
  const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`;
    try {
        const resp = await axios.get(url);
        return resp.data.results;
    } catch (error) {
        return; 
    }   
};


export async function getMovieCast(movieId) {
     const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
      try {
    const resp = await axios.get(url);
    return resp.data.cast;
  } catch (error) {
    return;
  }
};

export async function getSeriesCast(series_id) {
     const url = `https://api.themoviedb.org/3/tv/${series_id}/credits?api_key=${API_KEY}&language=en-US`;
      try {
    const resp = await axios.get(url);
    return resp.data.cast;
  } catch (error) {
    return;
  }
};

export async function getMovieReviews(movieId) {
  try {
             const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;
    const resp = await axios.get(url);
    return resp.data.results;
  } catch (error) {
    return;
  }
};

export async function getSeriesReviews(series_id) {
  try {
    const url = `https://api.themoviedb.org/3/tv/${series_id}/reviews?api_key=${API_KEY}&language=en-US`;
    const resp = await axios.get(url);
    return resp.data.results;
  } catch (error) {
    return;
  }
}; 

export async function getSearchedMovie(query) {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`;
    const resp = await axios.get(url);
    return resp.data.results;
  } catch (error) {
    return;
  }
}

export async function getSearchedSeries(query) {
  try {
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}&include_adult=false`;
    const resp = await axios.get(url);
    return resp.data.results;
  } catch (error) {
    return;
  }
}; 

export async function getSeriesVideo(series_id) {
  try {
    const url = `https://api.themoviedb.org/3/tv/${series_id}/videos?api_key=${API_KEY}&language=en-US`;
    const resp = await axios.get(url);
    return resp.data.results;
  } catch (error) {
    return;
  }
}; 

export async function getMoviesVideo(moviesId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${moviesId}/videos?api_key=${API_KEY}&language=en-US`;
    const resp = await axios.get(url);
    return resp.data.results;
  } catch (error) {
    return;
  }
}; 

export async function getTrendingMoviesByGenre(genre) {
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=${genre}`;
    const resp = await axios.get(url); 
    return resp.data.results; 
  } catch (error) {
    return; 
  }
}; 

export async function addMovieToWatchList(movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/account_states?api_key=${API_KEY}`;
    const resp = await axios.post(url); 
    return resp.data.results; 
  } catch (error) {
    return; 
  }
}; 

export async function deleteMovieFromWatchList(movieId) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/account_states?api_key=${API_KEY}`;
    const resp = await axios.post(url); 
    return resp.data.results; 
  } catch (error) {
    return; 
  }
}; 