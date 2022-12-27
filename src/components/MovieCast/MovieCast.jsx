import { useState, useEffect } from "react";
import { getMovieCast } from "services/api";
import { useParams } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { CastList, CastItem, Name, Character } from "./MovieCast.styled";
import noPoster from '../../images/no-poster.jpeg';
import PropTypes from 'prop-types';

const Cast = () => {
    const [cast, setCast] = useState(null);
    const { movieId } = useParams(); 
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        if (movieId) {
            getMovieCast(movieId)
                .then(data => setCast(data))
                .finally(() => setLoading(false));
        }
    }, [movieId]);

     if (!cast) {
    return <>{loading && <Loader />}</>;
  }
    
  return cast.length === 0 ? (
    <p>We dont't have any cast for this movie.</p>
  ) : (
      <div>
      <CastList>
        {cast.map(({ profile_path, name, character, id }) => (
          <CastItem key={id}>
            <img
                    src={profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}` : noPoster }
                    alt={name}
                    width={200}
                    height={300}
                    
              loading="lazy"
                />
                <Name>{name}</Name>
                 <Character>
                Character: {character ? character : 'No information'}
                    </Character>
          </CastItem>
        ))}
      </CastList>
    </div>
  );
};

Cast.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  profile_path: PropTypes.string,
  id: PropTypes.string,
};

export default Cast;