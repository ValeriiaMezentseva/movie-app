import { useState, useEffect } from "react";
import { getMovieReviews } from "services/api";
import { useParams } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { ReviewsList, ReviewsItem, Author, AuthorTitle } from "./MovieReviews.styled";
import PropTypes from 'prop-types';


const Reviews = () => {
    const [reviews, setReviews] = useState(null); 
    const { movieId } = useParams(); 
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        setLoading(true);
        if (movieId) {
            getMovieReviews(movieId)
                .then(data => setReviews(data)).finally(() => setLoading(false));
        }
    }, [movieId]);

     if (!reviews) {
    return <>{loading && <Loader />}</>;
  }

  return (
    <section>
      {reviews.length === 0 ? (
        <p>We dont't have any reviews for this movie.</p>
      ) : (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <Author>
                <AuthorTitle>Author:</AuthorTitle>{' '}
                {author ? author : 'No information'}
              </Author>
              <p>{content ? content : 'No information'}</p>
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