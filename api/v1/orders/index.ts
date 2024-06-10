/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get all orders */
  get: {
    query?: {
      userId?: string | undefined
    } | undefined

    status: 200
    /** A successful response. */
    resBody: Types.V1GetOrdersResponse
  }

  /** Create order */
  post: {
    status: 200
    /** A successful response. */
    resBody: Types.V1CreateOrderResponse
    reqBody: Types.V1CreateOrderRequest
  }
}
