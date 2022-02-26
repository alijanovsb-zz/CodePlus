import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    theme: "dark",
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice;
