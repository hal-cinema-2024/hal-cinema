import { useEffect, useState } from "react";
import { MoviesMock } from "../types/movies";
import { apiGet } from "../../util/apiClient";
export const useMovies = (pageId?: string, pageSize?: string) => {
  const [movies, setMovies] = useState<MoviesMock[]>([]);

  const fetchData = async (pageId?: string, pageSize?: string) => {
    try {
      const url = import.meta.env.VITE_MOVIE_MOCK_URL;
      const res = await apiGet(url + `?pageId=${pageId}&pageSize=${pageSize}`);
      setMovies(res);
    } catch (error) {
      console.error("movie service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(pageId, pageSize);
  }, [pageId, pageSize]);

  return { movies, setMovies };
};
