import * as z from 'zod'

export const CreateProductSchema = z
  .object({
    name: z.string().min(2).max(50),
    description: z.optional(z.string()),
    price: z.string(),
  })
  .refine((data) => parseFloat(data.price) > 0, {
    path: ['price'],
    message: 'Price must be greater than 0',
  })
