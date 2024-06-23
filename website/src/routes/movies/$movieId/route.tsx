import { SearchSchemaInput, createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { getMovie } from "../../../api/repositories/movie";

export const Route = createFileRoute("/movies/$movieId")({
  validateSearch: (
    input: {
      movieId: string;
    } & SearchSchemaInput
  ) =>
    z
      .object({
        movieId: z.string(),
      })
      .parse(input),
  loaderDeps: ({ search: { movieId } }) => ({
    movieId,
  }),

  loader: ({ deps: { movieId } }) => getMovie(movieId),
});
