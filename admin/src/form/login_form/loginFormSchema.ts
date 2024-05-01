import { z } from "zod";

export const loginFormSchema = z.object({
  username: z
    .string({
      message: "usernameは文字列でなければなりません",
    })
    .nonempty({ message: "ユーザー名は必須です" })
    .min(1, { message: "usernameは1文字以上でなければなりません" })
    .max(255, { message: "usernameは255文字以下でなければなりません" }),
  password: z
    .string({
      message: "passwordは文字列でなければなりません",
    })
    .nonempty({ message: "パスワードは必須です" })
    .min(1, { message: "passwordは1文字以上でなければなりません" })
    .max(255, { message: "passwordは255文字以下でなければなりません" }),
});
