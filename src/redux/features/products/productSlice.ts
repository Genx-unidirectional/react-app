import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { Product, ImageDataSchema } from "@/types/scrolla";
import axios from "axios";

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductsIntoState: (state, action) => {
      state.products = [...state.products, ...action.payload];
      console.log(state.products);
    },
  },
});

export const { getProductsIntoState } = ProductSlice.actions;
export default ProductSlice.reducer;

//Creating data fetching function in order to fetch the data and add it into state

export function getProducts(count: number) {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 10
        }`
      );
      const data = ImageDataSchema.parse(response.data.products);
      dispatch(getProductsIntoState(data));
    } catch (err) {
      console.log("Error while fetching the products");
    }
  };
}
