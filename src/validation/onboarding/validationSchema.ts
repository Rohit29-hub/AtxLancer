import { z } from "zod";


//Auth validation
export const authValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).nonempty({message: "email must be required"}),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one digit" })
    .regex(/[@$!%*?&]/, {
      message:
        "Password must contain at least one special character (@, $, !, %, *, ?, &)",
    }),
});

export type AuthSchema = z.infer<typeof authValidationSchema>;