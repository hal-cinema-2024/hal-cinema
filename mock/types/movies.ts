export interface MoviesMock {
  id?: number;
  movieName?: string;
  director?: string;
  thumbnail?: string;
  summary?: string;
  link?: string;
  term?: number;
  releaseDate?: string;
  endDate?: string;
  movieImage?: string[];
}

export type CreateMovie = Partial<Omit<MoviesMock, "movieId">>;

export type UpdateMovie = Partial<Omit<MoviesMock, "movieId">>;
export type DeleteMovie = Pick<MoviesMock, "id">;
