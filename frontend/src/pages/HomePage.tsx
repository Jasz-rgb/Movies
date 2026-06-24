import { useEffect, useState } from "react";
import MovieGrid from "@/components/skeletons/MovieGrid";
import { fetchTrendingMovies } from "@/services/api";
import Loader from "@/components/skeletons/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);
  if (loading) {
    return <Loader />;
  }

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