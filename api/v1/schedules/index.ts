/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get all schedules */
  get: {
    query?: {
      startTime?: string | undefined
      movieId?: string | undefined
    } | undefined

    status: 200
    /** A successful response. */
    resBody: Types.V1GetSchedulesResponse
  }

  /** Create schedule */
  post: {
    status: 200
    /** A successful response. */
    resBody: Types.V1CreateScheduleResponse
    reqBody: Types.V1CreateScheduleRequest
  }
}
