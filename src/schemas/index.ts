import { z } from "zod";

export const ContactSchemaUpdate = z
  .object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
  })
  .partial();

export type TContactSchemaUpdate = z.infer<typeof ContactSchemaUpdate>;

export const UserSchemaUpdate = z
  .object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    password: z.string(),
  })
  .partial();

export const UserSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  password: z.string(),
  id: z.string(),
  createdAt: z.string(),
});

export type TUserSchema = z.infer<typeof UserSchema>;

export type TUserSchemaUpdate = z.infer<typeof UserSchemaUpdate>;
