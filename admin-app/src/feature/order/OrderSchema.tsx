import { z } from "zod";

export const orderSchema = z.object({
  userId: z.string({
    message: "ユーザーIDは必須です",
  }),
  scheduleId: z.string({
    message: "スケジュールIDは必須です",
  }),
  movieName: z.string({
    message: "映画名は必須です",
  }),
  theater: z.string({
    message: "スクリーンは必須です",
  }),
  orderDetail: z.array(
    z.object({
      seatName: z.string(),
      priceType: z.number(),
      price: z.number(),
    })
  ),
});
