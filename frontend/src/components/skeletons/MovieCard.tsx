import { Link } from "react-router-dom";

interface MovieCardProps {
  id: number;
  title: string;
  posterUrl: string;
}

const MovieCard = ({ id, title, posterUrl }: MovieCardProps) => {
  return (
    <Link
      to={`/movie/${id}`}
      className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition"
    >
      <img
        src={posterUrl}
        alt={title}
        className="w-full h-72 object-cover"
      />

      <div className="p-3">
        <h3 className="font-medium truncate">{title}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;