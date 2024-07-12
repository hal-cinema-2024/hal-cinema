import { useEffect, useState } from "react";

export const useSelectMovie = () => {
  const [selectedMovie, setSelectedMovie] = useState<string>("");

  useEffect(() => {
    if (selectedMovie == null || undefined) {
      setSelectedMovie("");
    }
  }, [selectedMovie]);
  return { selectedMovie, setSelectedMovie };
};
