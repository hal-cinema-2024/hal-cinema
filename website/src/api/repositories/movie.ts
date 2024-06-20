import { client } from "../../utils/aspida";
import {
  CreateMovieRequestInterface,
  CreateMovieResponseInterface,
  DeleteMovieResponseInterface,
  GetMovieResponseInterface,
  GetMoviesResponseInterface,
  UpdateMovieRequestBodyInterface,
  UpdateMovieResponseInterface,
} from "../interfaces/movie";

export const getMovies = async () => {
  try {
    const res = await client.v1.movies.$get();
    const jsonData: GetMoviesResponseInterface = JSON.parse(
      JSON.stringify(res)
    );
    return jsonData;
  } catch (err) {
    console.log(err);
  }
};

export const getMovie = async (movieId: string) => {
  try {
    const res = await client.v1.movies._movieId(movieId).$get();
    const jsonData: GetMovieResponseInterface = JSON.parse(JSON.stringify(res));
    return jsonData;
  } catch (err) {
    console.log(err);
  }
};

export const createMovie = async (requestBody: CreateMovieRequestInterface) => {
  try {
    const res = await client.v1.movies.$post({
      body: requestBody,
    });
    const jsonData: CreateMovieResponseInterface = JSON.parse(
      JSON.stringify(res)
    );
    return jsonData;
  } catch (err) {
    console.log(err);
  }
};

export const updateMovie = async (
  movieId: string,
  requestBody: UpdateMovieRequestBodyInterface
) => {
  try {
    const res = await client.v1.movies._movieId(movieId).$put({
      body: requestBody,
    });
    const jsonData: UpdateMovieResponseInterface = JSON.parse(
      JSON.stringify(res)
    );
    return jsonData;
  } catch (err) {
    console.log(err);
  }
};

export const deleteMovie = async (movieId: string) => {
  try {
    const res = await client.v1.movies._movieId(movieId).$delete();
    const jsonData: DeleteMovieResponseInterface = JSON.parse(
      JSON.stringify(res)
    );
    return jsonData;
  } catch (err) {
    console.log(err);
  }
};
