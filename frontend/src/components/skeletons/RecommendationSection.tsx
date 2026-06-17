import MovieGrid from "./MovieGrid";
interface Movie {
  tmdb_id: number;
  title: string;
  poster_url: string;
}
interface Props {
  title: string;
  movies: Movie[];   //check
}


const RecommendationSection = ({
  title,
  movies,
}: Props) => {
  if (!movies?.length) return null;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

      <MovieGrid movies={movies} />
    </div>
  );
};

export default RecommendationSection;