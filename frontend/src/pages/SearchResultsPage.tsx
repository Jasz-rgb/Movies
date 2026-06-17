import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieGrid from "@/components/skeletons/MovieGrid";

const API_BASE = "https://movie-rec-466x.onrender.com";
interface SearchMovie {
  id: number;
  title: string;
  poster_path: string | null;
}
const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      if (!query) return;
      const res = await fetch(
        `${API_BASE}/tmdb/search?query=${encodeURIComponent(query)}`
      );

      const data = await res.json();
      const cards = data.results.map((movie: SearchMovie) => ({
        tmdb_id: movie.id,
        title: movie.title,
        poster_url: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "",
      }));

      setMovies(cards);
    };
    searchMovies();
  }, [query]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Search Results: {query}
      </h1>
      <MovieGrid movies={movies} />
    </div>
  );
};
export default SearchResultsPage;