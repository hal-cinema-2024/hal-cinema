import { z } from "zod";

export const orderSchema = z.object({
  scheduleId: z.string().nonempty({
    message: "スケジュールIDは必須です",
  }),
  movieName: z.string().nonempty({
    message: "映画名は必須です",
  }),

  priceType: z
    .string({
      message: "priceTypeは必須です",
    })
    .transform((val) => {
      if (isNaN(Number(val))) {
        throw new Error("priceTypeは数値である必要があります");
      }
      return Number(val);
    }),
});
