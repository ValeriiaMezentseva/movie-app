import { lazy } from 'react'; 
import { Routes, Route } from "react-router-dom";
import SharedLayout from 'components/SharedLayout';

const Home = lazy(() => import("../../pages/Home/Home"));
const Movies = lazy(() => import("../../pages/Movies/Movies")); 
const MovieInfo = lazy(() => import('../../pages/MovieInfo/MovieInfo'));
const Cast = lazy(() => import('../MovieCast/MovieCast'));
const Reviews = lazy(() => import('../MovieReviews/MovieReviews'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
        <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
  );
};
