import { AddMovieModal } from "../components/AddMovieModal";
import { MovieTable } from "../data-table/MovieTable";

export const Movies = () => {
  return (
    <>
      <AddMovieModal />
      <MovieTable />
    </>
  );
};
