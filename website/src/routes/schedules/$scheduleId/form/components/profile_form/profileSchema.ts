import { z } from "zod";

export const profileFormSchema = z.object({
  name: z.string().nonempty({ message: "名前は必須です" }),
  phone_number: z.string().nonempty({ message: "電話番号は必須です" }),
  age: z
    .number()
    .int({ message: "年齢は整数で入力してください" })
    .min(1, { message: "年齢は1歳以上でなければなりません" })
    .max(150, { message: "年齢は150歳以下でなければなりません" }),
  gender: z.string().transform((val) => Number(val)),
});
