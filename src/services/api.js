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

export async function getTrendingMovies() {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
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

export async function getMovieReviews(movieId) {
  try {
             const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;
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