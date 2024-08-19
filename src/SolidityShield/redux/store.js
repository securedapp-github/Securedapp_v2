import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./commonSlice";
import scanSummaryReducer from "./dashboard/scanSummarySlice";

export const solidityShieldScanStore = configureStore({
  reducer: {
    common: commonReducer,
    scanSummary: scanSummaryReducer,
  },
});
