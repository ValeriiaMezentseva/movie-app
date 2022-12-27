import { getTrendingMovies } from "services/api";
import { useState, useEffect } from "react";
import MovieList from "components/MovieList/MovieList";
import { Title, Container } from "./Home.styled";
import { Loader } from "components/Loader/Loader";




const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTrendingMovies().then(data => { setTrendingMovies(data) }).finally(() => setLoading(false));
  }, []);


  return (
    <Container>
      {loading && <Loader />}
          <Title>Popular this week</Title>
          <MovieList collection={trendingMovies}/>
    </Container>
  );
};

export default Home; 
