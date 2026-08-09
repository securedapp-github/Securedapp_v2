import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialIssuesState = {
  dateFilter: "Today",
  issuesData: [],
};

const issuesSlice = createSlice({
  name: "issues",
  initialState: initialIssuesState,
  reducers: {
    setDateFilter(state, action) {
      state.dateFilter = action.payload;
    },
    setIssuesData(state, action) {
      state.issuesData = action.payload;
    },
  },
});

export const getIssuesSelector = createSelector(
  (state) => state.issues,
  (state) => state
);

export const { setDateFilter, setIssuesData } = issuesSlice.actions;

export default issuesSlice.reducer;
