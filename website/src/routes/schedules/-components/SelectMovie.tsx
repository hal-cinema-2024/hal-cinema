import { Select } from "@yamada-ui/react";
import { useMovies } from "../../../../../mock/hooks/useMovies";

import { useSelectMovie } from "../-hooks/useSelectMovie";
import { MoviesMock } from "../../../../../mock/types/movies";

type Option = {
  label: string;
  value: number;
};

export const SelectMovie = () => {
  const { movies } = useMovies();
  const { setSelectedMovie } = useSelectMovie();

  function transformMovies(movies: MoviesMock[]): Option[] {
    return movies
      .filter((movie) => movie.movieName && movie.id)
      .map((movie) => ({
        label: movie.movieName as string,
        value: movie.id as number,
      }));
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
