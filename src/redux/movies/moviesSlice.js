import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
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
            const index = state.watchlistMovies.findIndex(movie => movie.id === action.payload.id);
            if (index !== -1) {
                state.watchlistMovies.splice(index, 1);
            }
        },
        removeMovieFromFavoriteList(state, action) {
            const index = state.favoriteMovies.findIndex(movie => movie.id === action.payload.id);
            if (index !== -1) {
                state.favoriteMovies.splice(index, 1);
            }
        },
    }
});

export const {
    addMovieToWatchList,
    addMovieToFavoriteList,
    removeMovieFromWatchList,
    removeMovieFromFavoriteList
} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;