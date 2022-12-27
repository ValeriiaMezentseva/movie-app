import { Outlet, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getSearchedMovie } from "services/api";
import { Container } from './Movies.styled';
import MovieList from 'components/MovieList/MovieList';
import { SearchMovies }  from 'components/SearchedMovies/SearchedMovies';
import { Loader } from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]); 
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const query = searchParams.get('query') ?? '';


  useEffect(() => {
    if (query) {
      setLoading(true);
      getSearchedMovie(query)
        .then(data => {
          if (data.length === 0) {
            toast.error("Sorry, we couldn't find anything on your request")
          }
          setSearchMovies(data)
        })
        .finally(() => setLoading(false));
    }
  }, [query]);

  const updateQuery = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <Container>
        <SearchMovies onSubmit={q => updateQuery(q)} />
        {loading && <Loader />}
      <MovieList collection={searchMovies} />
        <Outlet />
      </Container>
      <Toaster />
    </>
  );
};

export default Movies;