import { client } from "../utils/aspida";
import {
  CreateMovieRequestInterface,
  CreateMovieResponseInterface,
  DeleteMovieResponseInterface,
  GetMovieResponseInterface,
  GetMoviesResponseInterface,
  UpdateMovieRequestBodyInterface,
  UpdateMovieResponseInterface,
} from "../interfaces/movie";

export const getMovies = async (pageId: string, pageSize: string) => {
  try {
    if ((pageId && pageSize !== undefined) || (pageId && pageSize !== null)) {
      const res: GetMoviesResponseInterface = await client.v1.movies.$get({
        query: {
          pageId: pageId,
          pageSize: pageSize,
        },
      });

      return res.movie;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getMovie = async (movieId: string) => {
  try {
    const res: GetMovieResponseInterface = await client.v1.movies
      ._movieId(movieId)
      .$get();
    return res.movie;
  } catch (err) {
    console.log(err);
  }
};

export const createMovie = async (requestBody: CreateMovieRequestInterface) => {
  try {
    const res: CreateMovieResponseInterface = await client.v1.movies.$post({
      body: requestBody,
    });
    return res.movieId;
  } catch (err) {
    console.log(err);
  }
};

export const updateMovie = async (
  movieId: string,
  requestBody: UpdateMovieRequestBodyInterface
) => {
  try {
    const res: UpdateMovieResponseInterface = await client.v1.movies
      ._movieId(movieId)
      .$put({
        body: requestBody,
      });
    return res.movieId;
  } catch (err) {
    console.log(err);
  }
};

export const deleteMovie = async (movieId: string) => {
  try {
    const res: DeleteMovieResponseInterface = await client.v1.movies
      ._movieId(movieId)
      .$delete();

    return res.movieId;
  } catch (err) {
    console.log(err);
  }
};
