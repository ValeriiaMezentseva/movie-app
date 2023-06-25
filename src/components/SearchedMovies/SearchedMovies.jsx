import { useState } from "react";
import PropTypes from 'prop-types';

// import { GrClose } from 'react-icons/gr';
import { GoSearch, GoX } from 'react-icons/go';

import { SearchMoviesForm, StyledForm, SearchButton, Input } from "./SearchedMovies.styled";

export const SearchMovies = ({ value, onSubmit }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    onSubmit('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <SearchMoviesForm>
      <StyledForm onSubmit={handleSubmit}>
        {!isSearchOpen && (
          <SearchButton type="button" onClick={toggleSearch}>
            <GoSearch />
          </SearchButton>
        )}
        {isSearchOpen && (
          <>
            <Input
              type="text"
              name="query"
              value={value}
              placeholder="What do you want to watch?"
              onChange={(e) => onSubmit(e.target.value)}
            />
            <SearchButton type="submit">
              <GoSearch />
            </SearchButton>
            <SearchButton type="button" onClick={handleCloseSearch}>
              <GoX size={17}/>
            </SearchButton>
          </>
        )}
      </StyledForm>
    </SearchMoviesForm>
  );
};

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};