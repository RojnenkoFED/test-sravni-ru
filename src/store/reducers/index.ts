import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { offerReducer } from "./offerReducer";
import { sortReducer } from "./sortReducer";

export const rootReducer = combineReducers({
  offer: offerReducer,
  filter: filterReducer,
  sort: sortReducer,
});

export type RootState = ReturnType<typeof rootReducer>
