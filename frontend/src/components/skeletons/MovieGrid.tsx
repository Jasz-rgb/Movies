import { useGrid } from "@/context/GridProvider";
import MovieCard from "./MovieCard";

interface Movie {
  tmdb_id: number;
  title: string;
  poster_url: string;
}

interface Props {
  movies: Movie[];
}

const MovieGrid = ({ movies }: Props) => {
  const { columns } = useGrid();
  return (
    <div className="grid gap-4" style={{gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,}}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.tmdb_id}
          id={movie.tmdb_id}
          title={movie.title}
          posterUrl={movie.poster_url}
        />
      ))}
    </div>
  );
};

export default MovieGrid;