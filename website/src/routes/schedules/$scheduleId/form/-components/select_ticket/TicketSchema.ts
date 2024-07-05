import { z } from "zod";
export const ticketFormSchema = z.object({
  number_of_people: z.number(),
  ticket_type: z.string(),
  select: z.string(),
});
