import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./commonSlice";
import scanSummaryReducer from "./dashboard/scanSummarySlice";
import authReducer from "./auth/authSlice";
import scanHistoryReducer from "./scanHistory/scanHistorySlice";

export const solidityShieldScanStore = configureStore({
  reducer: {
    common: commonReducer,
    auth: authReducer,
    scanSummary: scanSummaryReducer,
    scanHistory: scanHistoryReducer,
  },
});
