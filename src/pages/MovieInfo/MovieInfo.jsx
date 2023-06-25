import { useState, useEffect, Suspense } from "react";
import { useLocation, useParams, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AiTwotoneStar, AiFillHeart } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';

import { getMovieById } from "services/api";
import { BackLink } from "components/BackLink/BackLink";
import { Loader } from "components/Loader/Loader";
import Video from "components/Videos/Video";

import {
  addMovieToWatchList,
  addMovieToFavoriteList,
  removeMovieFromFavoriteList,
  removeMovieFromWatchList
} from "redux/movies/moviesSlice";

import {
    Container,
    InfoWrapper,
    MovieDetails,
    StyledLink,
    MoreInfoList,
    MoreInfoItem,
    ShortInfo,
    InfoItem,
    OverView,
    BottomInfo,
    BottomTitleInfo,
    BottomInfoList,
    Title,
    AddButton,
    ButtonsBox,
    Image
} from "./MovieInfo.styled"; 


const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { movieId } = useParams();
  const backLinkHref = location.state?.from ?? '/';
    
  const dispatch = useDispatch();
  const watchListMovies = useSelector((state) => state.movies.watchlistMovies);
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);

  useEffect(() => {
    if (movieId) {
      setLoading(true);
      getMovieById(movieId)
        .then(data => {
          setMovie(data);
        })
        .finally(() => setLoading(false));
    }
  }, [movieId]);

  const {
    id,
    title,
    genres = [],
    poster_path,
    overview,
    vote_average = 1,
    vote_count,
    runtime,
    release_date = '',
  } = movie;

  const genresList = genres.map(genre => genre.name).join(', ');
  const releaseDate = release_date.split('-').reverse().join('.');
  const voteAverage = vote_average.toFixed(1);

  const handleAddToWatchList = () => {
    dispatch(addMovieToWatchList(movie));
  };

  const handleAddToFavorites = () => {
    dispatch(addMovieToFavoriteList(movie));
  };

  const handleRemoveFromWatchList = () => {
    dispatch(removeMovieFromWatchList({ id }));
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeMovieFromFavoriteList({ id }));
  };

  const isMovieInWatchlist = watchListMovies.some(movie => movie.id === id);
  const isMovieInFavorites = favoriteMovies.some(movie => movie.id === id);

  return (
    <>
      {loading && <Loader />}
      <Container>
        <BackLink to={backLinkHref}>Back to movies</BackLink>
        <InfoWrapper>
          <div>
            <Image
              src={poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
              loading="lazy"
            />
          </div>

          <MovieDetails>
            <Title> {title}</Title>
            <ShortInfo>
              <AiTwotoneStar fill='orange' />
              <InfoItem> {voteAverage}</InfoItem>
              <AiFillHeart fill="red" />
              <InfoItem> {vote_count}</InfoItem>
              <BiTime fill='green' />
              <InfoItem>{runtime} min</InfoItem>
            </ShortInfo>
            <ButtonsBox>
              {isMovieInWatchlist ? (
                <AddButton
                  type="button"
                  onClick={handleRemoveFromWatchList}
                >
                  Remove from WatchList
                </AddButton>
              ) : (
                <AddButton type="button" onClick={handleAddToWatchList}>
                  Add to WatchList
                </AddButton>
              )}
              {isMovieInFavorites ? (
                <AddButton
                  type="button"
                  onClick={handleRemoveFromFavorites}
                >
                  Remove from Favorites
                </AddButton>
              ) : (
                <AddButton type="button" onClick={handleAddToFavorites}>
                  Add to Favorites
                </AddButton>
              )}
            </ButtonsBox>
            <OverView>{overview}</OverView>
            <BottomInfoList>
              <BottomInfo>
                <BottomTitleInfo> Release date: </BottomTitleInfo>
                <span> {releaseDate}</span>
              </BottomInfo>
              <BottomInfo>
                <BottomTitleInfo> Genres: </BottomTitleInfo>
                <span> {genresList}</span>
              </BottomInfo>
            </BottomInfoList>
            <MoreInfoList>
              <MoreInfoItem>
                <StyledLink
                  to="cast"
                  state={{ from: location.state?.from ?? '/' }}
                >
                  Cast
                </StyledLink>
              </MoreInfoItem>
              <MoreInfoItem>
                <StyledLink
                  to="reviews"
                  state={{ from: location.state?.from ?? '/' }}
                >
                  Reviews
                </StyledLink>
              </MoreInfoItem>
              <MoreInfoItem>
                <Video />
              </MoreInfoItem>
            </MoreInfoList>
          </MovieDetails>
        </InfoWrapper>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default MovieInfo;