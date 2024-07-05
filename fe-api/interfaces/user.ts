import {
  V1User,
  V1GetUserResponse,
  V1UpdateUserResponse,
  V1DeleteUserResponse,
  V1GetUsersResponse,
} from "../../api/@types/index.ts";

type UpdateUserRequestInterface = {
  firstName?: string | undefined;
  lastName?: string | undefined;
  firstNameReading?: string | undefined;
  lastNameReading?: string | undefined;
  gender?: number | undefined;
};
export type {
  V1User as UserInterface,
  V1GetUsersResponse as GetUsersResponseInterface,
  V1GetUserResponse as GetUserResponseInterface,
  V1UpdateUserResponse as UpdateUserResponseInterface,
  UpdateUserRequestInterface,
  V1DeleteUserResponse as DeleteUserResponseInterface,
};
