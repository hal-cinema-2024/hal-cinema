/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Get movie details */
  get: {
    status: 200
    /** A successful response. */
    resBody: Types.V1GetMovieResponse
  }

  /** Delete movie */
  delete: {
    status: 200
    /** A successful response. */
    resBody: Types.V1DeleteMovieResponse
  }

  /** Update movie */
  put: {
    status: 200
    /** A successful response. */
    resBody: Types.V1UpdateMovieResponse

    reqBody: {
      movieName?: string | undefined
      director?: string | undefined
      sammary?: string | undefined
      thumbnail?: string | undefined
      link?: string | undefined
      term?: string | undefined
      releaseDate?: string | undefined
      endDate?: string | undefined
      movieImage?: string[] | undefined
    }
  }
}
