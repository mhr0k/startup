import { z } from 'zod';

export const LoginSchema = z.object({
  email: z
    .string()
    .email()
    .regex(/^(?!.*@yahoo\.com$)/, 'Yahoo emails are not allowed'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Must contain an uppercase letter')
    .regex(/[a-z]/, 'Must contain a lowercase letter')
    .regex(/[0-9]/, 'Must contain a number')
    .regex(/[^A-Za-z0-9]/, 'Must contain a special character'),
  consent: z.boolean().refine((value) => value, {
    message: 'You must agree to the Terms of Service',
  }),
});
export type LoginSchemaType = z.infer<typeof LoginSchema>;
