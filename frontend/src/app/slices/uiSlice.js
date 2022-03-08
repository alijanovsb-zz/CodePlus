import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    theme:
      localStorage.getItem("theme") !== ""
        ? localStorage.getItem("theme") === "light"
          ? "dark"
          : "light"
        : "light",
    modal: false,
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    toggleModal(state) {
      state.modal = !state.modal;
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice;
