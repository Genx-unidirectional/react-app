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

export const CATEGORIES = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
] as const;

export const defaultPriceRange: [number, number] = [10, 1749];
export const defaultRating: [number, number] = [1, 5];

export const discountPercentage: [number, number] = [2, 18]; //this is vague

export const ProductFilterValidator = z.object({
  categories: z.array(z.enum(CATEGORIES)),
  price: z.tuple([z.number(), z.number()]),
  rating: z.tuple([z.number(), z.number()]),
});

export type ProductFilterState = Omit<
  z.infer<typeof ProductFilterValidator>,
  "price" | "rating"
> & {
  price: { isCustom: boolean; range: [number, number] };
  rating: { isCustom: boolean; range: [number, number] };
};
