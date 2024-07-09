import { useEffect, useState } from "react";

export const useSelectMovie = () => {
  const [selectedMovie, setSelectedMovie] = useState<string>("");

  useEffect(() => {
    if (selectedMovie) {
      console.log(selectedMovie);
    }
  }, [selectedMovie]);
  return { selectedMovie, setSelectedMovie };
};
