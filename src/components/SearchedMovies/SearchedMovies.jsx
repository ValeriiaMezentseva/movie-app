import { SearchMoviesForm, StyledForm, SearchButton, Input } from "./SearchedMovies.styled";
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';

export const SearchMovies = ({ value, onSubmit }) => {
  return (
      <SearchMoviesForm>
          <StyledForm>
          <Input
              type="text"
              name='query'
              value={value}
              placeholder="Search the movie"
              onChange={(e) => onSubmit(e.target.value)}
          />
          <SearchButton type="submit">
              <GoSearch />
              </SearchButton>
              </StyledForm>
    </SearchMoviesForm>
  );
};

SearchMovies.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired, 
};