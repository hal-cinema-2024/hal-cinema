import { Table } from "@yamada-ui/table";
import { DataInstance } from "./types";
import { createColumns } from "./utils/column";

export const MovieTable = () => {
  const columns = createColumns(DataInstance.Movie);

  return (
    <Table
      columns={columns}
      data={[
        {
          movieId: "f",
          movieName: "efwefew",
          director: "sdsdvs",
          thumbnail: "sdvwv",
          summary: "sdvsdv",
          link: "sdvsd",
          term: "sdvsdv",
          releaseDate: "sdvsdv",
          endDate: "dvsdv",
          movieImage: [
            "sdvsdv",
            "sdvsdv",
            "sdvsdv",
            "sdvsdv",
            "sdvsdv",
            "sdvsdv",
            "sdvsdv",
          ],
        },
      ]}
    />
  );
};
