import { NativeSelect } from "@yamada-ui/react";
import { MoviesMock } from "../../../../../../mock/types/movies";
import { useMovies } from "../../../../../../mock/hooks/useMovies";
import { useSelectMovie } from "./hooks/useSelectMovie";

export const SelectMovie = () => {
  const { movies } = useMovies();
  const { handleChangeSelectMovie, selectedMovieId } = useSelectMovie();
  return (
    <>
      <NativeSelect
        name='movieId'
        value={selectedMovieId}
        onChange={handleChangeSelectMovie}
      >
        {movies.map((movie: MoviesMock) => (
          <option key={movie.id} value={movie.id}>
            {movie.movieName}
          </option>
        ))}
      </NativeSelect>
    </>
  );
};
