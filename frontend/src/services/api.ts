const API_BASE = "https://movie-rec-466x.onrender.com";

export async function fetchTrendingMovies() {
  const res = await fetch(
    `${API_BASE}/home?category=trending&limit=24`
  );

  if (!res.ok) throw new Error("Failed to fetch movies");

  return res.json();
}

export async function fetchMovieDetails(id: string) {
  const res = await fetch(
    `${API_BASE}/movie/id/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movie");
  }

  return res.json();
}
export async function searchMovies(query: string) {
  const res = await fetch(
    `${API_BASE}/tmdb/search?query=${encodeURIComponent(query)}`
  );

  if (!res.ok) throw new Error("Search failed");

  return res.json();
}
export async function fetchRecommendations(title: string) {
  const res = await fetch(
    `${API_BASE}/movie/search?query=${encodeURIComponent(title)}&tfidf_top_n=12&genre_limit=12`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch recommendations");
  }

  return res.json();
}