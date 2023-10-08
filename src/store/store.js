import { configureStore } from "@reduxjs/toolkit";
import codeReducer from "../reducers/codeReducer";

export const store = configureStore({
    reducer: codeReducer
});