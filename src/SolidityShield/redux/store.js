import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./commonSlice";
import scanSummaryReducer from "./dashboard/scanSummarySlice";
import issuesReducer from "./dashboard/issuesSlice";

export const solidityShieldScanStore = configureStore({
  reducer: {
    common: commonReducer,
    scanSummary: scanSummaryReducer,
    issues: issuesReducer,
  },
});
