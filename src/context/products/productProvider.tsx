"use client";
// we are creating context to provide products

import { ReactElement, createContext, useState } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initState: ProductType[] = [
  {
    sku: "item0001",
    name: "Widget",
    price: 9.99,
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 19.99,
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 29.99,
  },
];

export type UseProductContextState = {
  products: ProductType[];
};

const initContextState: UseProductContextState = {
  products: [],
};
export const ProductContext =
  createContext<UseProductContextState>(initContextState);

export function ProductProvider({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  const [products, setProducts] = useState<ProductType[]>(initState);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
