import { SearchMoviesForm, StyledForm, SearchButton, Input } from "./SearchedMovies.styled";
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';
import { Formik } from 'formik';

const initialValues = {
  query: '',
};
export const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = (value, { resetForm }) => {
    if (value.query.trim() === '') {
      return;
    }
    onSubmit(value.query);
    resetForm();
  };

  return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <SearchMoviesForm>
              <StyledForm>
                  <Input name="query" type="text" placeholder="Search the movie"/>
                   <SearchButton type="submit">
                      <GoSearch />
                  </SearchButton>
              </StyledForm>
              </SearchMoviesForm>
    </Formik>
  );
};

SearchMovies.propTypes = { onSubmit: PropTypes.func.isRequired, };