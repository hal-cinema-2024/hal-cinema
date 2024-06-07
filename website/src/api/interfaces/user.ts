import {
  V1User,
  V1GetUserResponse,
  V1UpdateUserResponse,
  V1DeleteUserResponse,
  ApiServiceUpdateUserBody,
  V1GetUsersResponse,
  V1CreateUserResponse,
  V1CreateUserReqest,
} from "../../../../api/@types/index.ts";

export type {
  V1User as UserInterface,
  V1CreateUserResponse as CreateUserResponseInterface,
  V1CreateUserReqest as CreateUserRequestBodyInterface,
  V1GetUsersResponse as GetUsersResponseInterface,
  V1GetUserResponse as GetUserByIDResponseInterface,
  V1UpdateUserResponse as UpdateUserResponseInterface,
  V1DeleteUserResponse as DeleteUserResponseInterface,
  ApiServiceUpdateUserBody as UpdateUserRequestBodyInterface,
};
