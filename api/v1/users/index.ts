/* eslint-disable */
import type * as Types from '../../@types'

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
}
