import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/main/homeSlice";
import commonReducer from "../SolidityShield/redux/commonSlice";
import authReducer from "../SolidityShield/redux/auth/authSlice";
import scanSummaryReducer from "../SolidityShield/redux/dashboard/scanSummarySlice";
import issuesReducer from "../SolidityShield/redux/dashboard/issuesSlice";
import historyReducer from "../SolidityShield/redux/dashboard/historySlice";
import scanHistoryReducer from "../SolidityShield/redux/scanHistory/scanHistorySlice";
import paymentReducer from "../SolidityShield/redux/dashboard/paymentSlice";

export const mainStore = configureStore({
  reducer: {
    home: homeReducer,
    common: commonReducer,
    auth: authReducer,
    scanSummary: scanSummaryReducer,
    issues: issuesReducer,
    history: historyReducer,
    scanHistory: scanHistoryReducer,
    payment: paymentReducer,
  },
});
