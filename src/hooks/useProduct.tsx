"use client";
import {
  ProductContext,
  UseProductContextState,
} from "@/context/products/productProvider";
import { useContext } from "react";

const useProducts = (): UseProductContextState => {
  return useContext(ProductContext);
};

export default useProducts;
