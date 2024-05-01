import { combineReducers } from "redux";

// import slices
import mainSliceReducer from "./features/task/mainSlice";
import userSliceReducer from "./features/users/userSlice";
import productSliceReducer from "./features/products/productSlice";
const rootReducer = combineReducers({
  cards: mainSliceReducer,
  users: userSliceReducer,
  productsArray: productSliceReducer,
});

export default rootReducer;
