import { z, ZodType } from "zod";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export const ImageDataSchema: ZodType<Product[]> = z.array(
  z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    price: z.number(),
    discountPercentage: z.number(),
    rating: z.number(),
    stock: z.number(),
    brand: z.string(),
    category: z.string(),
    thumbnail: z.string(),
    images: z.array(z.string()),
  })
);

export type ImageDataType = z.infer<typeof ImageDataSchema>;
