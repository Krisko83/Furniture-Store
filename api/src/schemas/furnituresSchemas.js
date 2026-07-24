import * as z from 'zod';

export const CreateFurnitureSchema = z.object({
    model: z.string()
        .min(4, { error: 'Model must be at least 4 symbols long' }),
    make: z.string()
        .min(4, { error: 'Make must be at least 4 symbols long' }),
    description: z.string()
        .min(11, { error: 'The description must be more than 10 symbols' }),
    img: z.string().url('Image URL must be a valid URL'),
    price: z.coerce.number()
        .positive({ error: 'The price must be a positive number' }),
    year: z.coerce.number()
        .min(1950, { error: 'The year must be between 1950 and 2050' })
        .max(2050, { error: 'The year must be between 1950 and 2050' }),
    material: z.string().optional()
});

