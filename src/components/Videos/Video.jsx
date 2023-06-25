import { useState, useEffect } from "react";
import { getSeriesVideo, getMoviesVideo } from "services/api";
import { useParams } from "react-router-dom";
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { Loader } from "components/Loader/Loader";

import { Button, BtnText, Icon } from "./Video.styled";
import PropTypes from 'prop-types';

const Video = () => {
  const [video, setVideo] = useState(null);
  const { series_id, movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (series_id) {
      getSeriesVideo(series_id)
        .then(data => setVideo(data))
        .finally(() => setLoading(false));
    } else if (movieId) {
      getMoviesVideo(movieId)
        .then(data => setVideo(data))
        .finally(() => setLoading(false));
    }
  }, [series_id, movieId]);

  if (!video) {
    return <>{loading && <Loader />}</>;
  }

  const filteredVideos = video.filter(video => video.type.toLowerCase() === "trailer");
  const hasTrailers = filteredVideos.length > 0;
  const disabled = !hasTrailers;

  const openTrailer = (key) => {
    const lightBox = basicLightbox.create(`
      <iframe width="680" height="415" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    lightBox.show();
  };
    
  const firstVideo = filteredVideos[0];

  const handleButtonClick = () => {
    if (!disabled) {
      openTrailer(firstVideo.key);
    }
  };



  return (
    <div>
      <Button
        onClick={handleButtonClick}
        disabled={disabled}
        onMouseEnter={() => setIsHovered(hasTrailers && !disabled)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <BtnText>
            Play <Icon />
          </BtnText>
        ) : (
          <BtnText>{disabled ? "We don't have this trailer :(" : "Trailer"}</BtnText>
        )}
      </Button>
    </div>
  );
};

Video.propTypes = {
  trailer_key: PropTypes.string,
};

export default Video;