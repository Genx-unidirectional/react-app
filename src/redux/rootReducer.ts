import { combineReducers } from "redux";

// import slices
import mainSliceReducer from "./features/task/mainSlice";

const rootReducer = combineReducers({
  cards: mainSliceReducer,
});

export default rootReducer;
