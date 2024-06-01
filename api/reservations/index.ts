/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Create reservation */
  post: {
    status: 200
    /** A successful response. */
    resBody: Types.V1CreateSeatReservationResponse
    reqBody: Types.V1CreateSeatReservationRequest
  }
}
