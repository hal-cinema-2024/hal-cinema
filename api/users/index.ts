/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Get user */
  get: {
    query?: {
      pageId?: string | undefined
      pageSize?: string | undefined
    } | undefined

    status: 200
    /** A successful response. */
    resBody: Types.V1GetUsersResponse
  }

  /** Create user */
  post: {
    status: 200
    /** A successful response. */
    resBody: Types.V1CreateUserResponse
    reqBody: Types.V1CreateUserReqest
  }
}
