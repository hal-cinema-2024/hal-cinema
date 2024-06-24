import { useEffect, useState } from "react";
import { GetMoviesResponseInterface } from "../../../../fe-api/interfaces/movie";
import { getMovies } from "../../../../fe-api/repositories/movie";
export const useMovie = (pageId?: string, pageSize?: string) => {
  const [movies, setMovies] = useState<GetMoviesResponseInterface>();

  const fetchData = async () => {
    try {
      const res = await getMovies(pageId, pageSize);
      if (res) setMovies(res);
    } catch (error) {
      console.error("movie service error: " + error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { movies, setMovies };
};
