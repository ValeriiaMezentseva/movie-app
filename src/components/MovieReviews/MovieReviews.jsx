import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";

import { getMovieReviews, getSeriesReviews } from "services/api";

import { Loader } from "components/Loader/Loader";
import { ReviewsList, ReviewsItem, Author, AuthorTitle, NoCast, Content } from "./MovieReviews.styled";



const Reviews = () => {
    const [reviews, setReviews] = useState(null); 
    const { movieId, series_id } = useParams(); 
    const [loading, setLoading] = useState(false); 

   useEffect(() => {
    setLoading(true);
    if (movieId) {
      getMovieReviews(movieId)
        .then(data => setReviews(data))
        .finally(() => setLoading(false));
    } else if (series_id) {
      getSeriesReviews(series_id)
        .then(data => setReviews(data))
        .finally(() => setLoading(false));
    }
  }, [movieId, series_id]);

  if (!reviews) {
    return <>{loading && <Loader />}</>;
  }

  return (
    <section>
      {reviews.length === 0 ? (
         <NoCast>We don't have any reviews for this {movieId ? "movie" : "series"} ☹ </NoCast>
      ) : (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <Author>
                <AuthorTitle>Author:</AuthorTitle>{' '}
                {author ? author : 'No information'}
              </Author>
              <Content>{content ? content : 'No information'}</Content>
            </ReviewsItem>
          ))}
        </ReviewsList>
      )}
    </section>
  );
};

Reviews.propTypes = {
  id: PropTypes.number,
  author: PropTypes.string,
  content: PropTypes.string,
};

export default Reviews;