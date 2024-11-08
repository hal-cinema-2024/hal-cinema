import { useEffect, useState } from "react";
import { MoviesMock } from "../../../../../mock/types/movies";
export const useMovies = (pageId: string, pageSize: string) => {
  const [movies, setMovies] = useState<MoviesMock>();

  const fetchData = async (pageId: string, pageSize: string) => {
    try {
      const url = process.env.VITE_MOCK_URL + "/movies";
      const res = await fetch(url + `?pageId=${pageId}&pageSize=${pageSize}`);
      if (res) setMovies(await res.json());
    } catch (error) {
      console.error("movie service error: " + error);
    }
  };
  useEffect(() => {
    fetchData(pageId, pageSize);
  }, []);

  return { movies, setMovies };
};
