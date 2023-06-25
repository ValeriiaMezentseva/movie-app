import { useState, useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";

import { AiTwotoneStar, AiFillHeart } from "react-icons/ai";
import { BiTime } from "react-icons/bi";

import { getMovieById } from "services/api";
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
} from "./MovieInfoModal.styled"; 

const MovieInfoModal = ({ movieId, closeModal }) => {
    const [movie, setMovie] = useState(null);
    const dispatch = useDispatch();
    const watchListMovies = useSelector((state) => state.movies.watchlistMovies);
    const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);

    useEffect(() => {
        if (movieId) {
            getMovieById(movieId)
                .then((data) => {
                    setMovie(data);
                })
                .catch((error) => {
                    throw error;
                });
        }
    }, [movieId]);

    if (!movie) {
        return <Loader />;
    }

    const {
        id,
        title,
        genres = [],
        poster_path,
        overview,
        vote_average = 1,
        vote_count,
        runtime,
        release_date = ""
    } = movie;

    const genresList = genres.map((genre) => genre.name).join(", ");
    const releaseDate = release_date.split("-").reverse().join(".");
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
                        alt={title}
                        loading="lazy"
                    />
                </div>

                <MovieDetails>
                    <Title>{title}</Title>
                    <ShortInfo>
                        <AiTwotoneStar fill="orange" />
                        <InfoItem>{voteAverage}</InfoItem>
                        <AiFillHeart fill="red" />
                        <InfoItem>{vote_count}</InfoItem>
                        <BiTime fill="green" />
                        <InfoItem>{runtime} min</InfoItem>
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

export default MovieInfoModal;