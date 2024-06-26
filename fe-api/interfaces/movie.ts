import {
  V1Movie,
  V1GetMoviesResponse,
  V1CreateMovieResponse,
  V1CreateMovieRequest,
  V1GetMovieResponse,
  V1UpdateMovieResponse,
  V1DeleteMovieResponse,
} from "../../api/@types/index.ts";

type UpdateMovieRequestBodyInterface = V1CreateMovieRequest;
export type {
  V1Movie as MovieInterface,
  V1GetMoviesResponse as GetMoviesResponseInterface,
  V1CreateMovieResponse as CreateMovieResponseInterface,
  V1CreateMovieRequest as CreateMovieRequestInterface,
  V1GetMovieResponse as GetMovieResponseInterface,
  V1UpdateMovieResponse as UpdateMovieResponseInterface,
  UpdateMovieRequestBodyInterface,
  V1DeleteMovieResponse as DeleteMovieResponseInterface,
};
