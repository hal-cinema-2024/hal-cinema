import { z } from "zod";

export const profileFormSchema = z.object({
  user_name: z.string(),
  gender: z.string(),
  age: z.string(),
});
