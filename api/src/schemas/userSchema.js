import * as z from 'zod';
import bcrypt from 'bcrypt';

export const CreateUserSchema = z.object({
    email: z.email({ error: 'Email must be valid.' }),
    password: z.string()
        .min(6, { error: 'Password must be at least 6 characters long' })
        .transform((data) => bcrypt.hash(data, 10))
}); 