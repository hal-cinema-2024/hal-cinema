/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** Get user */
  get: {
    status: 200
    /** A successful response. */
    resBody: Types.V1GetUserResponse
  }

  /** Delete user */
  delete: {
    status: 200
    /** A successful response. */
    resBody: Types.V1DeleteUserResponse
  }

  /** Update user */
  put: {
    status: 200
    /** A successful response. */
    resBody: Types.V1UpdateUserResponse

    reqBody: {
      firstName?: string | undefined
      lastName?: string | undefined
      firstNameReading?: string | undefined
      lastNameReading?: string | undefined
      gender?: number | undefined
    }
  }
}
