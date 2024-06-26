import { client } from "../utils/aspida";

import { GoogleLoginRequestInterface } from "../interfaces/login";

export const login = async (data: GoogleLoginRequestInterface) => {
  try {
    const res = await client.login.google.$post({ body: data });
    return res;
  } catch (err) {
    console.log(err);
  }
};
