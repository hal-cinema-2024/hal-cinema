import { useEffect, useState } from "react";
import { GetMovieResponseInterface } from "../../api/interfaces/movie";
import { getMovie } from "../../api/repositories/movie";
export const useMovie = (movieId: string) => {
  const [movie, setMovie] = useState<GetMovieResponseInterface>({});

  const fetchData = async (movieId: string) => {
    try {
      const res = await getMovie(movieId);
      if (res) setMovie(res);
    } catch (error) {
      console.error("movie service error: " + error);
    }
  };
  useEffect(() => {
    fetchData(movieId);
  }, []);

  return { movie, setMovie };
};
