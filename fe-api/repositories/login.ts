import { client } from "../utils/aspida";

import { GoogleLoginRequestInterface } from "../interfaces/login";
import { V1GoogleLoginRequest, V1GoogleLoginResponse } from "../../api/@types";

// type GoogleLoginRequest = {
//   code: String;
// }

export const login = async (data: V1GoogleLoginRequest) => {
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
