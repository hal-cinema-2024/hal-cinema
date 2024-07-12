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
    if (!pageId || !pageSize) {
      throw new Error("pageId and pageSize are required");
    }
    const res: GetMoviesResponseInterface = await client.v1.movies.$get({
      query: {
        pageId: pageId,
        pageSize: pageSize,
      },
    });

    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getMovie = async (movieId: string) => {
  try {
    if (!movieId) {
      throw new Error("movieId is required");
    }
    const res: GetMovieResponseInterface = await client.v1.movies
      ._movieId(movieId)
      .$get();
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const createMovie = async (requestBody: CreateMovieRequestInterface) => {
  try {
    if (!requestBody) {
      throw new Error("requestBody is required");
    }

    const res: CreateMovieResponseInterface = await client.v1.movies.$post({
      body: requestBody,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const updateMovie = async (
  movieId: string,
  requestBody: UpdateMovieRequestBodyInterface
) => {
  try {
    if (!movieId || !requestBody) {
      throw new Error("movieId and requestBody are required");
    }
    const res: UpdateMovieResponseInterface = await client.v1.movies
      ._movieId(movieId)
      .$put({
        body: requestBody,
      });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const deleteMovie = async (movieId: string) => {
  try {
    if (!movieId) {
      throw new Error("movieId is required");
    }
    const res: DeleteMovieResponseInterface = await client.v1.movies
      ._movieId(movieId)
      .$delete();

    return res;
  } catch (err) {
    console.log(err);
  }
};
