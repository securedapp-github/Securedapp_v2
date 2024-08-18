import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialCommonState = {
  showSideBar: false,
};

const commonSlice = createSlice({
  name: "common",
  initialState: initialCommonState,
  reducers: {
    setSideBar(state, action) {
      state.showSideBar = action.payload;
    },
  },
});

export const getCommonSelector = createSelector(
  (state) => state.common,
  (state) => state
);

export const { setSideBar } = commonSlice.actions;

export default commonSlice.reducer;
