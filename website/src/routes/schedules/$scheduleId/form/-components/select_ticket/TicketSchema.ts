import { z } from "zod";
export const ticketFormSchema = z.object({
  ticket: z.number(),
});
