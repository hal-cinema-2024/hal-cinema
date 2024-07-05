import { client } from "../utils/aspida";

import { GoogleLoginRequestInterface } from "../interfaces/login";

// type GoogleLoginRequest = {
//   code: String;
// }

export const login = async (data: string) => {
  // try {
  //   let reqBody: GoogleLoginRequest = {
  //     code: data,
  //   }

  //   const res = await fetch("http://localhost:8080/login/google", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(reqBody),
  //   })
  //   return res;
  // }catch {
  //   console.log("error");
  // }
  let reqBody: GoogleLoginRequestInterface = {
    code: data,
  };

  try {
    const res = await client.login.google.$post({ body: reqBody });
    return res.userId;
  } catch (err) {
    console.log(err);
  }
};
