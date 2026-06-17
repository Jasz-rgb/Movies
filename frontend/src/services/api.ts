const API_BASE = "https://movie-rec-466x.onrender.com";

export async function fetchTrendingMovies() {
  const res = await fetch(
    `${API_BASE}/home?category=trending&limit=24`
  );

  if (!res.ok) throw new Error("Failed to fetch movies");

  return res.json();
}

export async function fetchMovieDetails(id: number) {
  const res = await fetch(`${API_BASE}/movie/id/${id}`);

  if (!res.ok) throw new Error("Failed to fetch movie");

  return res.json();
}