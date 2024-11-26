import { NativeSelect, Button } from "@yamada-ui/react";
import { useEffect, useState } from "react";
import { useMovies } from "../../../mock/hooks/useMovies";
import { useSchedules } from "../../../mock/hooks/useSchedule";
import { AddMovieModal } from "../components/AddMovieModal";
import { Table } from "@yamada-ui/table";

export const ScheduleTable = () => {
  const { movies } = useMovies();
  const [selectedMovieId, setSelectedMovieId] = useState<number>(1);
  const { schedules } = useSchedules(selectedMovieId);

  const column = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "映画名",
      accessorKey: "movieName",
    },
    {
      header: "シアター",
      accessorKey: "theater",
    },
    {
      header: "開始時間",
      accessorKey: "startTime",
    },
    {
      header: "終了時間",
      accessorKey: "endTime",
    },
    {
      header: "予約可能",
      accessorKey: "isAvailable",
    },
  ];

  useEffect(() => {
    setSelectedMovieId(selectedMovieId);
  }, [selectedMovieId]);
  return (
    <>
      <NativeSelect
        name='movieId'
        value={selectedMovieId}
        onChange={(e) => setSelectedMovieId(Number(e.target.value))}
      >
        {movies.map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.movieName}
          </option>
        ))}
      </NativeSelect>

      <AddMovieModal />
      <Table data={schedules} columns={column} />
    </>
  );
};
