/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Get all movies */
  get: {
    query?: {
      pageId?: string | undefined
      pageSize?: string | undefined
    } | undefined

    status: 200
    /** A successful response. */
    resBody: Types.V1GetMoviesResponse
  }

  /** Create movie */
  post: {
    status: 200
    /** A successful response. */
    resBody: Types.V1CreateMovieResponse
    reqFormat: FormData
    reqBody: Types.V1CreateMovieRequest
  }
}
