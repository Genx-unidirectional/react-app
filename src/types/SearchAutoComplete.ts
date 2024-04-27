import { z } from "zod";

export const ProductSchema = z.object({
  products: z.array(
    z.object({
      title: z.string(),
    })
  ),
});

export type ProductSchemaType = z.infer<typeof ProductSchema>;
