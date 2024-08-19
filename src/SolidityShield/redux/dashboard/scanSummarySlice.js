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
  issuesChart: [
    { name: "Jan", value: 600000 },
    { name: "Feb", value: 400000 },
    { name: "Mar", value: 1000000 },
    { name: "Apr", value: 500000 },
    { name: "May", value: 600000 },
    { name: "Jun", value: 300000 },
    { name: "Jul", value: 400000 },
    { name: "Aug", value: 700000 },
    { name: "Sep", value: 800000 },
    { name: "Oct", value: 900000 },
    { name: "Nov", value: 850000 },
    { name: "Dec", value: 950000 },
  ],
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
    setIssuesChart(state, action) {
      state.issuesChart = action.payload;
    },
  },
});

export const getOverviewSelector = createSelector(
  (state) => state.scanSummary,
  (state) => state
);

export const { setDateFilter, setScanSummary, setIssuesChart } =
  scanSummarySlice.actions;

export default scanSummarySlice.reducer;
