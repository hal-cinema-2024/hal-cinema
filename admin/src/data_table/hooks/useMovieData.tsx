import { useState, useEffect } from "react";
import { getData } from "../MovieData";
import { Movie } from "../component/MovieColumn";

const useMovieData = () => {
  const [data, setData] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      setData(await getData());
    };
    fetchData();
  }, []);

  return { data, setData };
};

export default useMovieData;
