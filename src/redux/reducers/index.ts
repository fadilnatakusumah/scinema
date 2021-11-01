import { combineReducers } from "@reduxjs/toolkit";
import { errorsSlice } from "../slices/errorsSlice";
import { moviesSlice } from "../slices/moviesSlice";

export const rootReducers = combineReducers({
  errors: errorsSlice.reducer,
  movies: moviesSlice.reducer,
});
