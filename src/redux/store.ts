import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./reducers";

const store = configureStore({
  reducer: rootReducers,
  devTools: true,
  preloadedState: {
    errors: "",
    movies: { list: [] },
  },
});

export default store;
