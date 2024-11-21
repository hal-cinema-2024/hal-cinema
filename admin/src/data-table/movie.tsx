import { Table } from "@yamada-ui/table";
import { createColumns, DataInstance } from "./util";
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
