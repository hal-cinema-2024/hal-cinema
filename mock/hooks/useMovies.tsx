import { useEffect, useState } from "react";
import { MoviesMock } from "../types/movies";
export const useMovies = (pageId: string, pageSize: string) => {
  const [movies, setMovies] = useState<MoviesMock[]>([]);

  const fetchData = async (pageId: string, pageSize: string) => {
    try {
      const url = "http://localhost:8080/movies";
      const res = await fetch(url + `?pageId=${pageId}&pageSize=${pageSize}`);
      const data = await res.json();
      setMovies(data);
    } catch (error) {
      console.error("movie service error: " + error);
    }
  };

  useEffect(() => {
    fetchData(pageId, pageSize);
  }, [pageId, pageSize]);

  return { movies, setMovies };
};
