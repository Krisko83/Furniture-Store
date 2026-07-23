import * as z from 'zod';

export const CreateFurnitureSchema = z.object({
    model: z.string(),
    make: z.string(),
    description: z.string(),
    img: z.string(),
    price: z.coerce.number(),
    year: z.coerce.number(),
    material: z.string().optional()
});

 