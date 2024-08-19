import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialScanSummaryState = {
  dateFilter: "Today",
  scanSummary: {
    percentageValue: 85,
    values: [
      {
        value: 25,
        text: "Lorem Ipsum",
      },
      {
        value: 60,
        text: "Lorem Ipsum",
      },
      {
        value: 7,
        text: "Lorem Ipsum",
      },
    ],
  },
};

const scanSummarySlice = createSlice({
  name: "scanSummary",
  initialState: initialScanSummaryState,
  reducers: {
    setDateFilter(state, action) {
      state.dateFilter = action.payload;
    },
    setScanSummary(state, action) {
      state.scanSummary = action.payload;
    },
  },
});

export const getScanSummarySelector = createSelector(
  (state) => state.scanSummary,
  (state) => state
);

export const { setDateFilter, setScanSummary } = scanSummarySlice.actions;

export default scanSummarySlice.reducer;
