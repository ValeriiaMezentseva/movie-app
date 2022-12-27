import { useLocation } from "react-router-dom";
import { Link, List, MovieCardBox } from "./MovieList.styled";
import { MovieCard } from "components/MovieCard/MovieCard";
import PropTypes from 'prop-types'




const MovieList = ({ collection }) => {
    const location = useLocation();
      const prevUrl = location.pathname === '/' ? '/movies/' : '';

    return (
        <List>
        {collection.map(({ id, title, poster_path, release_date, vote_average }) =>
      (  <MovieCardBox key={id}>
            <Link to={`${prevUrl}${id}`} state={{ from: location }}>
                <MovieCard
                    id={id}
                    title={title}
                    poster={poster_path}
                    releaseDate={release_date}
                    voteAverage={vote_average}

                />
            </Link>
        </MovieCardBox>
        ))}
    </List>)
}; 

MovieList.propTypes = { 
   collection: PropTypes.arrayOf(PropTypes.shape({
       id: PropTypes.number.isRequired,
       title: PropTypes.string.isRequired, 
       poster: PropTypes.string, 
       releaseDate: PropTypes.string, 
       voteAverage: PropTypes.number, 
    })),
}

export default MovieList;