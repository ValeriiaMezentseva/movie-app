import { useState, useEffect, Suspense } from "react";
import { useLocation, useParams, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AiTwotoneStar, AiFillHeart} from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi';

import { getSeriesById } from "services/api";
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
    Title,
    InfoItem,
    OverView,
    BottomInfo,
    BottomTitleInfo,
    BottomInfoList,
    ButtonsBox,
    AddButton, 
    Image,
} from "../MovieInfo/MovieInfo.styled"; 


const SeriesInfo = () => {
    const [series, setSeries] = useState({});
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const { series_id } = useParams();
    const backLinkHref = location.state?.from ?? '/series';

    const dispatch = useDispatch();
    const watchListMovies = useSelector((state) => state.movies.watchlistMovies);
    const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);

    useEffect(() => {
        if (series_id) {
            setLoading(true);
            getSeriesById(series_id).then(data => { setSeries(data) }).finally(() => setLoading(false));
        }
        
    }, [series_id]);

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

    const handleAddToWatchList = () => {
        dispatch(addMovieToWatchList(series));
    };

    const handleAddToFavorites = () => {
        dispatch(addMovieToFavoriteList(series));
    };

    const handleRemoveFromWatchList = () => {
        dispatch(removeMovieFromWatchList({ id }));
    };

    const handleRemoveFromFavorites = () => {
        dispatch(removeMovieFromFavoriteList({ id }));
    };
    
    const isSeriesInWatchlist = watchListMovies.some(movie => movie.id === id);
    const isSeriesInFavorites = favoriteMovies.some(movie => movie.id === id);

    return (
        <>
            {loading && <Loader />}
            <Container backdrop={series.backdrop_path}>
                <BackLink to={backLinkHref}>Back to series</BackLink>
                <InfoWrapper>
                    <div>
                        <Image
                            src={poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`}
                            alt={name}
                            loading="lazy"
                        />
                    </div>
            
                    <MovieDetails>
                        <Title> {name}</Title>
                        <ShortInfo>
                            <AiTwotoneStar fill='orange' />
                            <InfoItem> {voteAverage}</InfoItem>
                            <AiFillHeart fill="red" />
                            <InfoItem> {vote_count}</InfoItem>
                            <BiMoviePlay fill='green' />
                            <InfoItem> seasons: {number_of_seasons}</InfoItem>
                        </ShortInfo>
                        <ButtonsBox>
                            {isSeriesInWatchlist ? (
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
                            {isSeriesInFavorites ? (
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
                                <span>  {releaseDate}</span>
                            </BottomInfo>
                            <BottomInfo>
                                <BottomTitleInfo> Genres: </BottomTitleInfo>
                                <span> {genresList}</span>
                            </BottomInfo>
                        </BottomInfoList>
                
                        <MoreInfoList>
                            <MoreInfoItem>
                                <StyledLink to="cast" state={{ from: location.state?.from ?? '/' }}>
                                    Cast
                                </StyledLink>
                            </MoreInfoItem>
                            <MoreInfoItem>
                                <StyledLink to="reviews" state={{ from: location.state?.from ?? '/' }}>
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


export default SeriesInfo; 