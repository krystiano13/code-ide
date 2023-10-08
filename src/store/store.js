import { configureStore } from "@reduxjs/toolkit";
import { codeSlice } from "../reducers/codeReducer";

export const store = configureStore({
    reducer: codeSlice
});