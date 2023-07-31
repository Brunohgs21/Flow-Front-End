import { z } from "zod";

export const contactSchema = z.object({
  email: z.string().email("Deve ser um e-mail"),
  name: z.string().min(3, "Deve ter pelo menos 3 caracteres"),
  phone: z.string().min(11, "Não é um número válido"),
});

export type ContactData = z.infer<typeof contactSchema>;
