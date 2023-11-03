import { z, ZodType, ZodError } from "zod";

// Define your Zod schema for the contact form data
export const contactFormSchema = z.object({
	name: z.string().min(5).max(50),
	email: z.string().email(),
	subject: z.string().min(15).max(100),
	message: z.string().min(50).max(1000),
});

// Define your Zod schema for the contact form data
export const newsLetterSchema = z.object({
	email: z.string().email(),
});
