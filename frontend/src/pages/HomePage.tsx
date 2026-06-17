import { useEffect, useState } from "react";
import MovieGrid from "@/components/skeletons/MovieGrid";
import { fetchTrendingMovies } from "@/services/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Trending Movies
      </h1>

      <MovieGrid movies={movies} />
    </div>
  );
};

export default HomePage;