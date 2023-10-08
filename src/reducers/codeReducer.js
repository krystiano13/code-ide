import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  html: "<h1>Welcome to my code editor !!!</h1>",
  css: "",
  js: "",
};

export const codeSlice = createSlice({
  name: "code",
  initialState: initialState,
  reducers: {
    html: (state, action) => {
      state.html = action.payload;
      return state;
    },
    css: (state, action) => {
      state.css = action.payload;
      return state;
    },
    js: (state, action) => {
      state.js = action.payload;
      return state;
    },
  },
});

export const { html, css, js } = codeSlice.actions;
export default codeSlice.reducer;
