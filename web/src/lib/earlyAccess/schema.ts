import { z } from "zod";

export const earlyAccessSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Please enter your email.")
    .max(254, "That email is too long.")
    .pipe(z.email("That email doesn't look quite right. Check it and try again.")),
});
