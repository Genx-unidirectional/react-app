import { combineReducers } from "redux";

// import slices
import mainSliceReducer from "./features/task/mainSlice";
import userSlice from "./features/users/userSlice";
const rootReducer = combineReducers({
  cards: mainSliceReducer,
  user: userSlice,
});

export default rootReducer;
