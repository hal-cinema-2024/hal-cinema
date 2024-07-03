import { client } from "../utils/aspida";

import type {
  GetUsersResponseInterface,
  GetUserResponseInterface,
  UpdateUserResponseInterface,
  UpdateUserRequestInterface,
  DeleteUserResponseInterface,
} from "../interfaces/user";

export const getUsers = async (page_id: string, page_size: string) => {
  try {
    if (!page_id || !page_size) {
      throw new Error("page_id and page_size are required");
    }
    const res: GetUsersResponseInterface = await client.v1.users.$get({
      query: {
        pageId: page_id,
        pageSize: page_size,
      },
    });
    return res.user;
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (userId: string) => {
  try {
    if (!userId) {
      throw new Error("userId is required");
    }
    const res: GetUserResponseInterface = await client.v1.users
      ._userId(userId)
      .$get();
    return res.user;
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async (
  userId: string,
  requestBody: UpdateUserRequestInterface
) => {
  try {
    if (!userId || !requestBody) {
      throw new Error("userId and requestBody are required");
    }
    const res: UpdateUserResponseInterface = await client.v1.users
      ._userId(userId)
      .$put({
        body: requestBody,
      });
    return res.userId;
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (userId: string) => {
  try {
    if (!userId) {
      throw new Error("userId is required");
    }
    const res: DeleteUserResponseInterface = await client.v1.users
      ._userId(userId)
      .$delete();
    return res.userId;
  } catch (err) {
    console.log(err);
  }
};
