import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./commonSlice";
import scanSummaryReducer from "./dashboard/scanSummarySlice";
import issuesReducer from "./dashboard/issuesSlice";
import historyReducer from "./dashboard/historySlice";
import paymentReducer from "./dashboard/paymentSlice";

export const solidityShieldScanStore = configureStore({
  reducer: {
    common: commonReducer,
    scanSummary: scanSummaryReducer,
    issues: issuesReducer,
    history: historyReducer,
    payment: paymentReducer,
  },
});
