// profileFormSchema.ts
import { z } from "zod";

export const profileFormSchema = z.object({
  //人数 1-20

  //券種
  name: z.string().refine(
    (value) => {
      return value.length <= 20;
    },
    {
      message: "20文字以内で入力してください",
      path: ["name"],
    }
  ),
  //年齢
  phone_number: z.string().refine(
    (value) => {
      const pattern =
        /^(\+?\d{1,4}[\s-]?)?(\()?(\d{3})(?(2)\))[\s-]?\d{3}[\s-]?\d{4}$/;
      return pattern.test(value);
    },
    {
      message: "有効な電話番号を入力してください",
      path: ["phone_number"], //path はエラーメッセージを表示する場所を指定します
    }
  ),

  age: z.number().refine(
    (value) => {
      return value >= 0 && value <= 120;
    },
    {
      message: "0-120の範囲で入力してください",
      path: ["age"],
    }
  ),

  gender: z.enum(["0", "1", "2"]).refine(
    (value: string) => {
      return value !== "";
    },
    {
      message: "選択してください",
      path: ["gender"],
    }
  ),
});
