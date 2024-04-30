import { z } from "zod";

export const seatFormSchema = z.object({
  coordinate: z.string(),
  seat_of_number: z.number(),
});
