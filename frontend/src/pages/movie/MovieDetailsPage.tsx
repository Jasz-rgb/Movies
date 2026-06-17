import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails,fetchRecommendations } from "@/services/api";
import RecommendationSection from "@/components/skeletons/RecommendationSection";
interface Genre {
  id: number;
  name: string;
}

interface Movie {
  title: string;
  overview: string;
  poster_url: string;
  backdrop_url: string;
  release_date: string;
  genres: Genre[];
}

interface RecommendationMovie {
  tmdb_id: number;
  title: string;
  poster_url: string;
}

interface TfidfRecommendation {
  tmdb: RecommendationMovie;
}

interface RecommendationsResponse {
  tfidf_recommendations: TfidfRecommendation[];
  genre_recommendations: RecommendationMovie[];
}

const MovieDetailsPage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  const [recommendations, setRecommendations] =
    useState<RecommendationsResponse | null>(null);

  useEffect(() => {
    if (!id) return;

    const loadMovie = async () => {
      try {
        const data = await fetchMovieDetails(id);

        setMovie(data);

        const recs = await fetchRecommendations(data.title);

        setRecommendations(recs);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 text-white">
        Loading...
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="p-6 text-white">
        Movie not found.
      </div>
    );
  }

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">
        Movie Details
      </h1>

      {/* Details Section */}
      <div className="grid md:grid-cols-[300px_1fr] gap-8">
        {/* Poster Card */}
        <div className="bg-zinc-900 rounded-xl p-4 h-fit">
          <img
            src={movie.poster_url}
            alt={movie.title}
            className="w-full rounded-lg"
          />
        </div>

        {/* Details Card */}
        <div className="bg-zinc-900 rounded-xl p-6">
          <h2 className="text-4xl font-bold mb-3">
            {movie.title}
          </h2>

          <p className="text-zinc-400 mb-4">
            Release Date: {movie.release_date}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="px-3 py-1 rounded-full bg-zinc-800 text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <hr className="border-zinc-700 mb-6" />

          <h3 className="text-2xl font-semibold mb-3">
            Overview
          </h3>

          <p className="text-zinc-300 leading-relaxed">
            {movie.overview || "No overview available."}
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                movie.title + " official trailer"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700"
            >
              ▶ Watch Trailer
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {movie.backdrop_url && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Backdrop
          </h2>

          <img
            src={movie.backdrop_url}
            alt={movie.title}
            className="w-full rounded-xl"
          />
        </div>
      )}

      {/* Recommendations */}
      <div className="mt-12">
        <RecommendationSection
          title="🔎 Similar Movies"
          movies={
            recommendations?.tfidf_recommendations?.map(
              (item: TfidfRecommendation) => ({
                tmdb_id: item.tmdb.tmdb_id,
                title: item.tmdb.title,
                poster_url: item.tmdb.poster_url,
              })
            ) || []
          }
        />

        <RecommendationSection
          title="🎭 More Like This"
          movies={
            recommendations?.genre_recommendations || []
          }
        />
      </div>
    </div>
  );
};

export default MovieDetailsPage;