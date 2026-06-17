import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const API_BASE = "https://movie-rec-466x.onrender.com";

interface Movie {
  id: number;
  title: string;
}

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchMovies = async () => {
      if (query.trim().length < 2) {
        setResults([]);
        return;
      }

      try {
        const res = await fetch(
          `${API_BASE}/tmdb/search?query=${encodeURIComponent(query)}`
        );

        const data = await res.json();

        setResults(data.results.slice(0, 8));
        setShowDropdown(true);
      } catch (err) {
        console.error(err);
      }
    };

    const timer = setTimeout(fetchMovies, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="relative w-full max-w-md">
      <div className="flex items-center bg-zinc-800 rounded-lg px-3 py-2">
        <Search className="size-4 text-zinc-400 mr-2" />

        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent outline-none w-full text-white"
        />
      </div>

      {showDropdown && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden z-50">
          {results.map((movie) => (
            <button key={movie.id}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(`/search?q=${query}`);
                }
              }}
              onClick={() => {
                setQuery("");
                setShowDropdown(false);
                navigate(`/movie/${movie.id}`);
              }} className="w-full text-left px-4 py-3 hover:bg-zinc-800 text-white">
              {movie.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;