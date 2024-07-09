import { Select } from "@yamada-ui/react";
import { useMovies } from "../../movies/-hooks/useMovies";
import {
  GetMoviesResponseInterface,
  MovieInterface,
} from "../../../../../fe-api/interfaces/movie";
import { useSelectMovie } from "../-hooks/useSelectMovie";

type Option = {
  label: string;
  value: string;
};

export const SelectMovie = () => {
  const { movies } = useMovies("1", "20");
  const { setSelectedMovie } = useSelectMovie();

  function transformMovies(movies: GetMoviesResponseInterface): Option[] {
    const option = movies as MovieInterface[];
    return (
      option &&
      option
        .filter((movie) => movie.movieName && movie.movieId)
        .map((movie) => ({
          label: movie.movieName as string,
          value: movie.movieId as string,
        }))
    );
  }

  const data = transformMovies(movies!);

  return (
    <div>
      <Select
        placeholder='映画絞り込み選択'
        size='md'
        items={data}
        onChange={(value) => {
          console.log(value);
          setSelectedMovie(value as string);
        }}
      />
    </div>
  );
};
