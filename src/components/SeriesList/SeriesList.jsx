
import { useLocation } from "react-router-dom";
import { Link, List, SeriesCardBox } from "./SeriesList.styled";
import { MovieCard } from "components/MovieCard/MovieCard";
import PropTypes from 'prop-types'



const SeriesList = ({ collection }) => {
    const location = useLocation();
    const prevUrl = location.pathname === '/' ? '/series/' : '';



    
    return (
            <List>
                {collection.map(({ id, name, poster_path, first_air_date, vote_average }) =>
                (<SeriesCardBox key={id}>
                    <Link to={`${prevUrl}${id}`} state={{ from: location }}>
                        <MovieCard
                            id={id}
                            title={name}
                            poster={poster_path}
                            releaseDate={first_air_date}
                            voteAverage={vote_average}

                        />
                    </Link>
                </SeriesCardBox>
                ))}
            </List>
    )
    
}; 

SeriesList.propTypes = { 
   collection: PropTypes.arrayOf(PropTypes.shape({
       id: PropTypes.number.isRequired,
       name: PropTypes.string.isRequired, 
       poster: PropTypes.string, 
       releaseDate: PropTypes.string, 
       voteAverage: PropTypes.number, 
    })),
}

export default SeriesList;