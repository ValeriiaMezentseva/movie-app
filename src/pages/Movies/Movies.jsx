import { Outlet, useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect, Suspense } from "react";

import { getSearchedMovie, getTrendingMovies } from "services/api";

import MovieList from 'components/MovieList/MovieList';
import { SearchMovies }  from 'components/SearchedMovies/SearchedMovies';
import { Loader } from 'components/Loader/Loader';

import { Container, Title, SearchButton } from './Movies.styled';


const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const query = searchParams.get('query') ?? '';

  

  useEffect(() => {
    setLoading(true);
    if (query) {
      getSearchedMovie(query)
        .then(data => {
          if (data.length === 0) {
            toast.error("Sorry, we couldn't find anything on your request")
          }
          setSearchMovies(data);
          setLoading(false);
        })
        .catch(error => {
          toast.error("An error occurred while fetching the searched movies.");
          setLoading(false);
        });
    } else {
      getTrendingMovies()
        .then(data => {
          setTrendingMovies(data);
          setLoading(false);
        })
        .catch(error => {
          toast.error("An error occurred while fetching the trending movies.");
          setLoading(false);
        });
    }
  }, [query]);

      const updateQuery = query => {
        const nextParams = query !== '' ? { query } : {};
        setSearchParams(nextParams);
    };



  return (
    <>
      <Container>
        {loading && <Loader />}
       <SearchButton>
          <SearchMovies value={query} onSubmit={q => updateQuery(q)} />
        </SearchButton>
        <Title>{query ? 'Search Results' : 'Popular this week'}</Title>
        {query ? (
          <MovieList collection={searchMovies} />
        ) : (
          <MovieList collection={trendingMovies} />
        )}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      <Toaster />
    </>
  ); 
}; 

export default Movies;