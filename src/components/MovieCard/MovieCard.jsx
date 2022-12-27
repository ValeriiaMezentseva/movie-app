import PropTypes from 'prop-types';
import { Poster, Info, Title, MovieInfo, Rating } from './MovieCard.styled';
import noPoster from '../../images/no-poster.jpeg';


export const MovieCard = ({ id, title, poster, releaseDate, voteAverage = 1, }) => {
    return (
        <>
            <div>
                <Poster
                    src={poster ? `https://image.tmdb.org/t/p/w300/${poster}` : noPoster}
                    alt={title}
                    loading="lazy" />
            </div>
            <Info>
                <Title>{title}</Title>
                <MovieInfo>
                    { releaseDate ? new Date(releaseDate).getFullYear() : 'No information'}
                    <Rating>{voteAverage.toFixed(1)}</Rating>
                </MovieInfo>
            </Info>
        </>
    )

};

MovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    poster: PropTypes.string, 
    releaseDate: PropTypes.string, 
    voteAverage: PropTypes.number,
}



