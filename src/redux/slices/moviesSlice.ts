import { createSlice } from "@reduxjs/toolkit";

interface MoviesStates {
  list: [];
}

const initialState = {
  list: [],
} as MoviesStates;

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});
