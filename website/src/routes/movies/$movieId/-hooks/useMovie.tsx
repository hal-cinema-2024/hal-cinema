import { useEffect, useState } from "react";
import { getMovie } from "../../../../../../fe-api/repositories/movie";
import { MovieInterface } from "../../../../../../fe-api/interfaces/movie";
export const useMovie = (movieId: string) => {
  const [movie, setMovie] = useState<MovieInterface>();

  const fetchData = async (movieId: string) => {
    try {
      const res = await getMovie(movieId);
      if (res) setMovie(res!);
    } catch (error) {
      console.error("movie service error: " + error);
    }
  };
  useEffect(() => {
    fetchData(movieId);
  }, []);

  return { movie, setMovie };
};
