import { useState, useEffect } from "react";

export const useSelectMovie = () => {
  const [selectedMovieId, setSelectedMovieId] = useState<number>(1);
  useEffect(() => {
    setSelectedMovieId(selectedMovieId);
  }, [selectedMovieId]);
  const handleChangeSelectMovie = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMovieId(Number(e.target.value));
  };

  return {
    selectedMovieId,
    handleChangeSelectMovie,
  };
};
