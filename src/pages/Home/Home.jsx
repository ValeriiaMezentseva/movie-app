 import { useState, useEffect, useRef, Suspense } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import { getTrendingMoviesByGenre, getTrendingAll } from "services/api";
import { Loader } from "components/Loader/Loader";
import noPoster from '../../images/no-poster.jpeg';

import {
    Title,
    TrendingBox,
    TrendingList,
    Container,
    ListBox,
    MovieList,
    MovieCardBox,
    Link,
    MovieCard,
    Rating,
    Poster,
    ScrollLeftButton,
    ScrollRightButton,
} from "./Home.styled"; 

const genres = [
  { id: 28, name: "Action" },
  { id: 10751, name: "Family" },
  { id: 10749, name: "Romance" },
  { id: 18, name: "Drama" },
  { id: 35, name: "Comedy" },
];

const Home = () => {
  const [genreMovies, setGenreMovies] = useState({});
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const genreListsRefs = useRef([]);
  const location = useLocation();
  const prevUrl = location.pathname === '/' ? '/movies/' : '';

  useEffect(() => {
    setLoading(true);

    Promise.all(genres.map(({ id }) => getTrendingMoviesByGenre(id)))
      .then(results => {
        const updatedGenreMovies = genres.reduce((acc, { id }, index) => {
          acc[id] = results[index];
          return acc;
        }, {});

        setGenreMovies(updatedGenreMovies);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });

    getTrendingAll()
      .then(results => {
        setTrendingMovies(results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const scrollLeft = genreIndex => {
    const list = genreListsRefs.current[genreIndex];
    list.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = genreIndex => {
    const list = genreListsRefs.current[genreIndex];
    list.scrollBy({ left: 300, behavior: "smooth" });
  };

    return (
        <>
            {!loading ? (
                <Container>
                    <TrendingBox>
                        <Title style={{ textAlign: "center", margin: '0'}}>Trending Today</Title>
                        <TrendingList>
                            <ScrollLeftButton show={true} onClick={() => scrollLeft(-1)}>
                                <BsArrowLeftCircle />
                            </ScrollLeftButton>
                            <MovieList ref={ref => (genreListsRefs.current[-1] = ref)}>
                                {trendingMovies.map(({ id, title, poster_path, vote_average }) => (
                                    <MovieCardBox key={id}>
                                        <Link to={`${prevUrl}${id}`} state={{ from: location }}>
                                            <MovieCard id={id}>
                                                <Poster
                                                    src={poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : noPoster}
                                                    alt={title}
                                                    loading="lazy"
                                                />
                                                <Rating>{vote_average.toFixed(1)}</Rating>
                                            </MovieCard>
                                        </Link>
                                    </MovieCardBox>
                                ))}
                            </MovieList>
                            <ScrollRightButton show={true} onClick={() => scrollRight(-1)}>
                                <BsArrowRightCircle />
                            </ScrollRightButton>
                        </TrendingList>
                    </TrendingBox>
                    <ListBox>
                        {genres.map(({ id, name }, index) => (
                            <div key={id}>
                                <Title>{name}</Title>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <ScrollLeftButton show={true} onClick={() => scrollLeft(index)}>
                                        <BsArrowLeftCircle />
                                    </ScrollLeftButton>
                                    <MovieList ref={ref => (genreListsRefs.current[index] = ref)}>
                                        {genreMovies[id]?.map(({ id, title, poster_path, vote_average }) => (
                                            <MovieCardBox key={id}>
                                                <Link to={`${prevUrl}${id}`} state={{ from: location }}>
                                                    <MovieCard id={id}>
                                                        <Poster
                                                            src={poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : noPoster}
                                                            alt={title}
                                                            loading="lazy"
                                                        />
                                                        <Rating>{vote_average.toFixed(1)}</Rating>
                                                    </MovieCard>
                                                </Link>
                                            </MovieCardBox>
                                        ))}
                                    </MovieList>
                                    <ScrollRightButton show={true} onClick={() => scrollRight(index)}>
                                        <BsArrowRightCircle />
                                    </ScrollRightButton>
                                </div>
                            </div>
                        ))}
                    </ListBox>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </Container>
            )
                : (<Loader />)}
        </>
    ); 
};

export default Home; 