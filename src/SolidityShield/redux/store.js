import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./commonSlice";

export const solidityShieldScanStore = configureStore({
  reducer: {
    common: commonReducer,
  },
});
