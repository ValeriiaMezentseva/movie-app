import { useState, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import Modal from 'components/Modal/Modal';
import MovieInfoModal from 'components/MovieInfoModal/MovieInfoModal';
import SeriesInfoModal from 'components/SeriesInfoModal/SeriesInfoModal';

import { Container, Title, NoMoviesText, NoMoviesBox, NoMovieImg } from './Favorites.styled';
import { List, MovieCardBox } from 'components/MovieList/MovieList.styled';

const Favorites = () => {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedItemType, setSelectedItemType] = useState(null);
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);

  useEffect(() => {
    setLoading(true);
    if (favoriteMovies) {
      setLoading(false);
    }
  }, [favoriteMovies]);

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
      <Title>Favorites</Title>
          {favoriteMovies.length === 0 ? ( 
              <NoMoviesBox>
                  <NoMovieImg/>
                  <NoMoviesText> You didn't add any movies to your favorites! </NoMoviesText>
                  </NoMoviesBox>
      ) : (
        <List>
          {favoriteMovies.map(({ id, title, name, poster_path, first_air_date, release_date, vote_average }) => (
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
      <Outlet />
      {modalOpen && selectedItemId && (
        <Modal state={modalOpen} stateFn={closeModal}>
          {selectedItemType === 'movie' && <MovieInfoModal movieId={selectedItemId} closeModal={closeModal} />}
          {selectedItemType === 'series' && <SeriesInfoModal seriesId={selectedItemId} closeModal={closeModal} />}
        </Modal>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Favorites;