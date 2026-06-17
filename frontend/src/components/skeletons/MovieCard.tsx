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
      className="group"
    >
      <div className="overflow-hidden rounded-lg bg-zinc-900">
        <img
          src={posterUrl}
          alt={title}
          className="
            w-full
            aspect-2/3
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />
      </div>

      <h3 className="mt-2 text-sm truncate">
        {title}
      </h3>
    </Link>
  );
};

export default MovieCard;