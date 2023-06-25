 import { Routes, Route } from "react-router-dom";
import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { theme } from "components/theme";

import SharedLayout from 'components/SharedLayout';

const Home = lazy(() => import("../../pages/Home/Home"));
const Movies = lazy(() => import("../../pages/Movies/Movies")); 
const Series = lazy(() => import("../../pages/Series/Series"));
const WatchList = lazy(() => import("../../pages/WatchList/WatchList"));
const Favorites = lazy(() => import("../../pages/Favorites/Favorites"));
const MovieInfo = lazy(() => import('../../pages/MovieInfo/MovieInfo'));
const SeriesInfo = lazy(() => import('../../pages/SeriesInfo/SeriesInfo'));
const Cast = lazy(() => import('../MovieCast/MovieCast'));
const Reviews = lazy(() => import('../MovieReviews/MovieReviews'));
const Video = lazy(() => import('../Videos/Video'));


export const App = () => {

  const { darkTheme } = useSelector(state => state.theme);

  
  return (
    <div>
      <ThemeProvider theme={darkTheme ? theme.dark : theme.light}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieInfo />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="videos" element={<Video />} />
            </Route>
            <Route path="series" element={<Series />} />
            <Route path='series/:series_id' element={<SeriesInfo />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="videos" element={<Video />} />
            </Route>
            <Route path="watchlist" element={<WatchList />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="*" element={<div>Not found</div>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  ); 
};
