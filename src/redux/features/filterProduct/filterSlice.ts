import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
];
export const initialState = {
  categories: CATEGORIES,
  rating: { isCustom: true, range: [1, 5] },
  price: { isCustom: true, range: [10, 1749] },
  discount: { isCustom: true, range: [2, 18] },
};
export type FilterStateType = typeof initialState;
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string>) => {
      const itExists = state.categories.find((c) => c === action.payload);
      if (itExists) {
        state.categories = state.categories.filter((c) => c !== action.payload);
      } else {
        state.categories = [...state.categories, action.payload];
      }
    },
    setPrice: (state, action: PayloadAction<[number, number]>) => {
      state.price.range = action.payload;
    },
    setRating: (state, action: PayloadAction<[number, number]>) => {
      state.rating.range = action.payload;
    },
    setDiscount: (state, action: PayloadAction<[number, number]>) => {
      state.discount.range = action.payload;
    },
  },
});

export const { setCategories, setPrice, setRating, setDiscount } =
  filterSlice.actions;

export default filterSlice.reducer;
