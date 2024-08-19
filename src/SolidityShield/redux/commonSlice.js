import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialCommonState = {
  showSideBar: false,
  selectedSidebarItem: "Overview",
};

const commonSlice = createSlice({
  name: "common",
  initialState: initialCommonState,
  reducers: {
    setSideBar(state, action) {
      state.showSideBar = action.payload;
    },
    setSelectedSidebarItem(state, action) {
      state.selectedSidebarItem = action.payload;
    },
  },
});

export const getCommonSelector = createSelector(
  (state) => state.common,
  (state) => state
);

export const { setSideBar, setSelectedSidebarItem } = commonSlice.actions;

export default commonSlice.reducer;
