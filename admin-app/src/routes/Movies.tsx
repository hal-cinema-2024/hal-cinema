import { AddMovieModal } from "../components/modal/AddMovieModal";
import { MovieTable } from "../data-table/MovieTable";

export const Movies = () => {
  return (
    <>
      <AddMovieModal />
      <MovieTable />
    </>
  );
};
