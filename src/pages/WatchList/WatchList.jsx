import { useState, Suspense, useEffect } from 'react';
import { useSelector} from 'react-redux';
import { Outlet } from 'react-router-dom';

import { MovieCard } from 'components/MovieCard/MovieCard';
import Modal from 'components/Modal/Modal';
import MovieInfoModal from 'components/MovieInfoModal/MovieInfoModal';
import SeriesInfoModal from 'components/SeriesInfoModal/SeriesInfoModal';
import { Loader } from 'components/Loader/Loader';

import { Container, Title, NoMoviesBox, NoMovieImg, NoMoviesText } from './WatchList.styled';
import { List, MovieCardBox } from 'components/MovieList/MovieList.styled';

const WatchList = () => {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedItemType, setSelectedItemType] = useState(null); 
  const watchListMovies = useSelector((state) => state.movies.watchlistMovies);
    
    useEffect(() => {
        setLoading(true);
        if (watchListMovies) {
            setLoading(false); 
        }
    }, [watchListMovies]); 


  const openModal = (itemId, itemType) => {
    setSelectedItemId(itemId);
    setModalOpen(true);
    setSelectedItemType(itemType);
  };

  const closeModal = () => {
    setSelectedItemId(null);
    setModalOpen(false);
    setSelectedItemType(null);
  };

  return (
    <Container>
        {loading && <Loader />}
          <Title>Watchlist</Title>
          {watchListMovies.length === 0 ? (
              <NoMoviesBox>
                  <NoMovieImg />
                  <NoMoviesText>You didn't add any movies to your watchlist!</NoMoviesText>
              </NoMoviesBox>
          ) : (
              <List>
                  {watchListMovies.map(({ id, title, name, poster_path, first_air_date, release_date, vote_average }) => (
                      <MovieCardBox key={id}>
                          <MovieCard
                              id={id}
                              title={name || title}
                              poster={poster_path}
                              releaseDate={first_air_date || release_date}
                              voteAverage={vote_average}
                              onClick={() => {
                                  if (release_date) {
                                      openModal(id, 'movie');
                                  } else if (first_air_date) {
                                      openModal(id, 'series');
                                  }
                              }}
                          />
                      </MovieCardBox>
                  ))}
              </List>
          )}
      {modalOpen && selectedItemId && (
        <Modal state={modalOpen} stateFn={closeModal}>
          {selectedItemType === 'movie' && (
            <MovieInfoModal movieId={selectedItemId} closeModal={closeModal} />
          )}
          {selectedItemType === 'series' && (
            <SeriesInfoModal seriesId={selectedItemId} closeModal={closeModal} />
          )}
        </Modal>
          )}
           <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
    </Container>
  );
}; 

export default WatchList;