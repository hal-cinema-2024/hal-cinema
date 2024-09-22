import { client } from "../utils/aspida";

import { V1GoogleLoginRequest, V1GoogleLoginResponse } from "../../api/@types";

// type GoogleLoginRequest = {
//   code: String;
// }

export const login = async (
  data: V1GoogleLoginRequest
): Promise<V1GoogleLoginResponse | void> => {
  try {
    if (!data) {
      throw new Error("reqBody is required");
    }
    const res: V1GoogleLoginResponse = await client.login.google.$post({
      body: data,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
