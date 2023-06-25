import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AiTwotoneStar, AiFillHeart } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';

import { getSeriesById } from "services/api";

import { Loader } from "components/Loader/Loader";

import {
  removeMovieFromFavoriteList,
  removeMovieFromWatchList
} from "redux/movies/moviesSlice";

import {
    Container,
    InfoWrapper,
    MovieDetails,
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
} from "../MovieInfoModal/MovieInfoModal.styled"; 

const SeriesInfoModal = ({ seriesId, closeModal }) => {
  const [series, setSeries] = useState(null);
  const dispatch = useDispatch();
  const watchListMovies = useSelector((state) => state.movies.watchlistMovies);
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);

  useEffect(() => {
    if (seriesId) {
      getSeriesById(seriesId)
        .then(data => {
          setSeries(data);
        })
        .catch(error => {
          throw error;
        });
    }
  }, [seriesId]);

  if (!series) {
    return <Loader />;
  }

  const {
    id,
    name,
    genres = [],
    poster_path,
    overview,
    vote_average = 1,
    vote_count,
    number_of_seasons,
    first_air_date = '',
  } = series;

  const genresList = genres.map(genre => genre.name).join(', ');
  const releaseDate = first_air_date.split('-').reverse().join('.');
  const voteAverage = vote_average.toFixed(1);

  const handleRemoveFromWatchList = () => {
    dispatch(removeMovieFromWatchList({ id }));
    closeModal();
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeMovieFromFavoriteList({ id }));
    closeModal();
  };

  const isMovieInWatchlist = watchListMovies.some(movie => movie.id === id);
  const isMovieInFavorites = favoriteMovies.some(movie => movie.id === id);

  return (
    <Container>
      <InfoWrapper>
        <div>
          <Image
            src={poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={name}
            loading="lazy"
          />
        </div>

        <MovieDetails>
          <Title>{name}</Title>
          <ShortInfo>
            <AiTwotoneStar fill="orange" />
            <InfoItem>{voteAverage}</InfoItem>
            <AiFillHeart fill="red" />
            <InfoItem>{vote_count}</InfoItem>
            <BiTime fill="green" />
            <InfoItem> seasons: {number_of_seasons}</InfoItem>
          </ShortInfo>
          <ButtonsBox>
            {isMovieInWatchlist && (
              <AddButton
                type="button"
                onClick={handleRemoveFromWatchList}
              >
                Remove from WatchList
              </AddButton>
            )}
            {isMovieInFavorites && (
              <AddButton
                type="button"
                onClick={handleRemoveFromFavorites}
              >
                Remove from Favorites
              </AddButton>
            )}
          </ButtonsBox>
          <OverView>{overview}</OverView>
          <BottomInfoList>
            <BottomInfo>
              <BottomTitleInfo>Release date:</BottomTitleInfo>
              <span>{releaseDate}</span>
            </BottomInfo>
            <BottomInfo>
              <BottomTitleInfo>Genres:</BottomTitleInfo>
              <span>{genresList}</span>
            </BottomInfo>
          </BottomInfoList>
        </MovieDetails>
      </InfoWrapper>
    </Container>
  );
};

export default SeriesInfoModal;