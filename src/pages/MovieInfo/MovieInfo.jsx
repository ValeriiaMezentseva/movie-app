import { getMovieById } from "services/api";
import { useState, useEffect, Suspense } from "react";
import { useLocation, useParams, Outlet } from "react-router-dom";
import { Container , InfoWrapper, MovieDetails, StyledLink, MoreInfoList, MoreInfoItem, AdditionalInfo } from "./MovieInfo.styled";
import { BackLink } from "components/BackLink/BackLink";
import { Loader } from "components/Loader/Loader";



const MovieInfo = () => {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false); 
    const location = useLocation();
    const { movieId } = useParams();
    const backLinkHref = location.state?.from ?? '/movies';


    useEffect(() => {
        if (movieId) {
            setLoading(true);
            getMovieById(movieId).then(data => { setMovie(data) }).finally(() => setLoading(false));
        }
        
    }, [movieId]);

    const {
        title,
        genres = [],
        poster_path,
        overview,
        vote_average = 1,
        release_date = '',
    } = movie;
    
    const genresList = genres.map(genre => genre.name).join(', ');
    const releaseYear = release_date.split('-').slice(0, 1).join('');
    const voteAverage = vote_average.toFixed(1) * 10;

    return (
        <>
            {loading && <Loader />}
        <Container>
            <BackLink to={backLinkHref}>Back to movies</BackLink>
            <InfoWrapper>
                <div>
                    <img
                        src={poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`}
                        alt={title}
                        loading="lazy"
                    />
                </div>
            
                <MovieDetails>
                    <h2> {title}({releaseYear})</h2>
                    <p>User Rate: {voteAverage}%</p>
                    <h3>Preview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{genresList}</p>
                </MovieDetails>
                

            </InfoWrapper>
            <AdditionalInfo>Additional Information</AdditionalInfo>
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
                </MoreInfoList>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            </Container>
            </>
    )
};


export default MovieInfo; 