// profileFormSchema.ts
import { z } from "zod";

export const profileFormSchema = z.object({
  //人数 1-20

  //券種
  name: z.string().nonempty({ message: "名前は必須です" }),

  phone_number: z
    .string()
    .nonempty({ message: "電話番号は必須です" })
    .refine(
      (value) => {
        //電話番号の正規表現 例: 09012345678
        const pattern = /^[0-9]{10,11}$/;
        return pattern.test(value);
      },
      {
        message: "有効な電話番号を入力してください",
        path: ["phone_number"], //path はエラーメッセージを表示する場所を指定します
      }
    ),

  age: z
    .number()
    .int()

    .refine(
      (value: number) => {
        return value >= 0 || value <= 120;
      },
      {
        message: "0-120の範囲で入力してください",
        path: ["age"],
      }
    ),

  gender: z
    .enum(["0", "1", "2"])
    .refine((value) => value !== undefined, { message: "性別は必須です" }),
});
