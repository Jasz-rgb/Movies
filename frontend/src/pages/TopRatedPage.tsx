import { useEffect, useState } from "react";
import MovieGrid from "@/components/skeletons/MovieGrid";
import Loader from "@/components/skeletons/Loader";

const API_BASE = import.meta.env.VITE_API_URL;

interface Movie {
  tmdb_id: number;
  title: string;
  poster_url: string;
}

const TopRatedPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const res = await fetch(
          `${API_BASE}/home?category=top_rated&limit=24`
        );

        const data = await res.json();

        setMovies(data);
      } catch (err) {
        console.error(err);
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
        Top Rated Movies
      </h1>

      <MovieGrid movies={movies} />
    </div>
  );
};

export default TopRatedPage;