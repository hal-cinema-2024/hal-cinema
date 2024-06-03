/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Delete schedule */
  delete: {
    status: 200
    /** A successful response. */
    resBody: Types.V1DeleteScheduleResponse
  }

  /** Update schedule */
  put: {
    status: 200
    /** A successful response. */
    resBody: Types.V1UpdateScheduleResponse
    reqBody: Types.ApiServiceUpdateScheduleBody
  }
}
