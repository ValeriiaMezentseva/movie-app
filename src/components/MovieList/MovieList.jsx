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

// import { useEffect, useState, useRef } from "react";
// import { useLocation } from "react-router-dom";
// import { Link, List, MovieCardBox, ScrollButton } from "./MovieList.styled";
// import { MovieCard } from "components/MovieCard/MovieCard";
// import PropTypes from 'prop-types';
// import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

// const MovieList = ({ collection }) => {
//   const location = useLocation();
//   const prevUrl = location.pathname === '/' ? '/movies/' : '';

//   const [scrollLeftVisible, setScrollLeftVisible] = useState(false);
//   const [scrollRightVisible, setScrollRightVisible] = useState(true);
//   const listRef = useRef(null);

//   useEffect(() => {
//     const list = listRef.current;
//     setScrollLeftVisible(list.scrollLeft > 0);
//     setScrollRightVisible(list.scrollLeft < list.scrollWidth - list.clientWidth);
//   }, []);

//   const scrollLeft = () => {
//     const list = listRef.current;
//     list.scrollBy({ left: -300, behavior: "smooth" });
//     setScrollLeftVisible(list.scrollLeft > 0);
//     setScrollRightVisible(list.scrollLeft < list.scrollWidth - list.clientWidth);
//   };

//   const scrollRight = () => {
//     const list = listRef.current;
//     list.scrollBy({ left: 300, behavior: "smooth" });
//     setScrollLeftVisible(list.scrollLeft > 0);
//     setScrollRightVisible(list.scrollLeft < list.scrollWidth - list.clientWidth);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <ScrollButton show={scrollLeftVisible} onClick={scrollLeft}>
//         <BsArrowLeftCircle />
//       </ScrollButton>
//       <List ref={listRef}>
//         {collection.map(({ id, title, poster_path, release_date, vote_average }) => (
//           <MovieCardBox key={id}>
//             <Link to={`${prevUrl}${id}`} state={{ from: location }}>
//               <MovieCard
//                 id={id}
//                 title={title}
//                 poster={poster_path}
//                 releaseDate={release_date}
//                 voteAverage={vote_average}
//               />
//             </Link>
//           </MovieCardBox>
//         ))}
//       </List>
//       <ScrollButton show={scrollRightVisible} onClick={scrollRight}>
//         <BsArrowRightCircle />
//       </ScrollButton>
//     </div>
//   );
// };

// MovieList.propTypes = {
//   collection: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string,
//     releaseDate: PropTypes.string,
//     voteAverage: PropTypes.number,
//   })),
// };

// export default MovieList;