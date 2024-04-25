"use client";
import { CartContext, CartContextState } from "@/context/products";
import { useContext } from "react";

const useCart = (): CartContextState => {
  return useContext(CartContext);
};

export default useCart;
