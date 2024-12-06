import { useParams } from "react-router";
import { useMovieById } from "../../../mock/hooks/useMovieById";

export const Movie = () => {
  const urlParams = useParams();
  const { id } = urlParams;

  const { movie } = useMovieById(id!);
  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Movie Detail</h1>
      <div>
        <h2>Movie ID: {movie.id}</h2>
        <h2>Movie Name: {movie.movieName}</h2>
        <h2>Director: {movie.director}</h2>
        <h2>Link: {movie.link}</h2>
        <h2>Term: {movie.term}</h2>
      </div>
    </div>
  );
};
