import { useEffect, useState } from "react";
import { getMovies } from "../../../../../fe-api/repositories/movie";
import { MovieInterface } from "../../../../../fe-api/interfaces/movie";
export const useMovies = (pageId: string, pageSize: string) => {
  const [movies, setMovies] = useState<MovieInterface[]>();

  const fetchData = async (pageId: string, pageSize: string) => {
    try {
      const res = await getMovies("1", "50");
      if (res) setMovies(res);
    } catch (error) {
      console.error("movie service error: " + error);
    }
  };
  useEffect(() => {
    fetchData(pageId, pageSize);
  }, []);

  return { movies, setMovies };
};
