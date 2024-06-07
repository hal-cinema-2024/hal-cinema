/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** Get order */
  get: {
    status: 200
    /** A successful response. */
    resBody: Types.V1GetOrderResponse
  }

  /** Delete order */
  delete: {
    status: 200
    /** A successful response. */
    resBody: Types.V1DeleteOrderResponse
  }
}
