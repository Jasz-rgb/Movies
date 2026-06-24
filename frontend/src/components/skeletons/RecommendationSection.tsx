import MovieGrid from "./MovieGrid";
interface Movie {
  tmdb_id: number;
  title: string;
  poster_url: string;
}
interface Props {
  title: string;
  movies: Movie[];
}
const RecommendationSection = ({
  title,
  movies,
}: Props) => {

return (
  <div className="mt-10">
    <h2 className="text-2xl font-bold mb-4">
      {title} ({movies.length})
    </h2>

    <MovieGrid movies={movies} />
  </div>
);

};

export default RecommendationSection;