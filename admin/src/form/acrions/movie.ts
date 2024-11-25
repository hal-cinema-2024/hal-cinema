import { CreateMovie } from "../../../../mock/types/movies";
import { apiDelete, apiPost } from "../../../../util/apiClient";

export const createMovie = async (data: CreateMovie) => {
  try {
    const url = "http://localhost:8080/movies";
    const res = await apiPost(url, data);
    return res;
  } catch (error) {
    console.error("movie service error: " + error);
  }
};

export const deleteMovie = async (movieId: string) => {
  try {
    const url = `http://localhost:8080/movies/${movieId}`;
    const res = await apiDelete(url);
    return res;
  } catch (error) {
    console.error("movie service error: " + error);
  }
};
