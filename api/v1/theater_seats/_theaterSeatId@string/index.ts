/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Update theater seat */
  put: {
    status: 200
    /** A successful response. */
    resBody: Types.V1UpdateTheaterSeatResponse

    reqBody: {
      seats?: Types.V1Seat[] | undefined
    }
  }
}
