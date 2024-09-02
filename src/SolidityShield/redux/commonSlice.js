import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialCommonState = {
  showSideBar: window.innerWidth > 1024,
  selectedSidebarItem: "Overview",
  creditsRemaining: 10,
  scanNowModal: false,
  sourceType: "Github",
  chainType: "Ethereum Mainnet",
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
    setCreditsRemaining(state, action) {
      state.creditsRemaining = action.payload;
    },
    setScanNowModal(state, action) {
      state.scanNowModal = action.payload;
    },
    setSourceType(state, action) {
      state.sourceType = action.payload;
    },
    setChainType(state, action) {
      state.chainType = action.payload;
    },
  },
});

export const getCommonSelector = createSelector(
  (state) => state.common,
  (state) => state
);

export const {
  setSideBar,
  setSelectedSidebarItem,
  setCreditsRemaining,
  setScanNowModal,
  setSourceType,
  setChainType,
} = commonSlice.actions;

export default commonSlice.reducer;
