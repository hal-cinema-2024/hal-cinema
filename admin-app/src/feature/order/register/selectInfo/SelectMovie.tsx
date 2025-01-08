import { NativeSelect } from "@yamada-ui/react";
import { MoviesMock } from "../../../../../../mock/types/movies";
import { useMovies } from "../../../../../../mock/hooks/useMovies";
import { useState, useEffect } from "react";

export const SelectMovie = () => {
  const { movies } = useMovies();
  const [selectedMovieId, setSelectedMovieId] = useState<number>(1);
  useEffect(() => {
    setSelectedMovieId(selectedMovieId);
  }, [selectedMovieId]);
  return (
    <>
      <NativeSelect
        name='movieId'
        value={selectedMovieId}
        onChange={(e) => setSelectedMovieId(Number(e.target.value))}
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
