import { Outlet, useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect, Suspense } from "react";

import {getTrendingSeries, getSearchedSeries } from "services/api";

import SeriesList from 'components/SeriesList/SeriesList';
import { SearchMovies }  from 'components/SearchedMovies/SearchedMovies';
import { Loader } from 'components/Loader/Loader';

import { Container, Title, SearchButton} from './Series.styled';


const Series = () => {
    const [searchSeries, setSearchSeries] = useState([]);
    const [trendingSeries, setTrendingSeries] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        setLoading(true);
        if (query) {
            getSearchedSeries(query)
                .then(data => {
                    if (data.length === 0) {
                        toast.error("Sorry, we couldnt find anything on your request")
                    }
                    setSearchSeries(data);
                    setLoading(false);
                })
                .catch(error => {
                    toast.error("An error occured while fetching searched movies");
                    setLoading(false)
                })
        } else {
            getTrendingSeries()
                .then(data => {
                    setTrendingSeries(data)
                    setLoading(false);
                })
                .catch(error => {
                    toast.error("An error occured while fetching searched movies");
                    setLoading(false)
                })
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
                    <SeriesList collection={searchSeries} />
                ) : (
                    <SeriesList collection={trendingSeries} />
                )}
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </Container>
             <Toaster />
        </>
    );
}; 

export default Series;