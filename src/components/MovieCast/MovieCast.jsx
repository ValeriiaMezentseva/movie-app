import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

import { getMovieCast, getSeriesCast } from "services/api";

import { Loader } from "components/Loader/Loader";

import { CastList, CastItem, Name, Character, NoCast } from "./MovieCast.styled";
import noPoster from '../../images/no-poster.jpeg';


const Cast = () => {
    const [cast, setCast] = useState(null);
    const { movieId, series_id } = useParams(); 
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        if (movieId) {
            getMovieCast(movieId)
                .then(data => setCast(data))
                .finally(() => setLoading(false));
        }
        else if (series_id) {
          getSeriesCast(series_id)
            .then(data => setCast(data))
          .finally(() => setLoading(false));
      }
    }, [movieId, series_id]);

     if (!cast) {
    return <>{loading && <Loader />}</>;
  }
    
  return cast.length === 0 ? (
    <NoCast>We don't have any cast for this {movieId ? "movie" : "series"} ☹ </NoCast>
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