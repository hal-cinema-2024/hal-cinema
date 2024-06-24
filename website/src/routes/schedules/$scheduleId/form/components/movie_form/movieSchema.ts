import { z } from "zod";

export const ticketFormSchema = z.object({
  ticket_type: z.string(),
});

export const movieFormSchema = z.object({
  selectSeat: z.string(),
});
