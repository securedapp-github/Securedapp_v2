import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/main/homeSlice";

export const mainStore = configureStore({
  reducer: {
    home: homeReducer,
    
  },
});
