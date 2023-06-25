import { createSlice } from "@reduxjs/toolkit";

const loadStateFromStorage = () => {
  try {
    const serializedState = localStorage.getItem("moviesState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const saveStateToStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("moviesState", serializedState);
  } catch (error) {
  }
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState: loadStateFromStorage() || {
    favoriteMovies: [],
    watchlistMovies: [],
  },
  reducers: {
    addMovieToWatchList(state, action) {
      state.watchlistMovies.push(action.payload);
    },
    addMovieToFavoriteList(state, action) {
      state.favoriteMovies.push(action.payload);
    },
    removeMovieFromWatchList(state, action) {
      const index = state.watchlistMovies.findIndex(
        (movie) => movie.id === action.payload.id
      );
      if (index !== -1) {
        state.watchlistMovies.splice(index, 1);
      }
    },
    removeMovieFromFavoriteList(state, action) {
      const index = state.favoriteMovies.findIndex(
        (movie) => movie.id === action.payload.id
      );
      if (index !== -1) {
        state.favoriteMovies.splice(index, 1);
      }
    },
  },
});

export const {
  addMovieToWatchList,
  addMovieToFavoriteList,
  removeMovieFromWatchList,
  removeMovieFromFavoriteList,
} = moviesSlice.actions;

export const moviesReducer = (state, action) => {
  const newState = moviesSlice.reducer(state, action);
  saveStateToStorage(newState);
  return newState;
};