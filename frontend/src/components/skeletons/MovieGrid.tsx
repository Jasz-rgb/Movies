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
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
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