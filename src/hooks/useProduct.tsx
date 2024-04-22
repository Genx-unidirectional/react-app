import { ProductContext, UseProductContextState } from "@/context/products";
import { useContext } from "react";

const useProducts = (): UseProductContextState => {
  return useContext(ProductContext);
};

export default useProducts;
