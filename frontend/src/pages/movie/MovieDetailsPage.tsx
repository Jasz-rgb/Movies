import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold">
        Movie {id}
      </h1>
    </div>
  );
};

export default MovieDetailsPage;