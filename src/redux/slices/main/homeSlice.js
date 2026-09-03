"use client";

import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLargeScreen: true,
  isRequestModalOpen: false,
  darkMode: true,
};

const homeSlice = createSlice({
  name: "Home",
  initialState: initialState,
  reducers: {
    setIsLargeScreen(state, action) {
      state.isLargeScreen = action.payload;
    },
    setIsRequestModalOpen(state, action) {
      state.isRequestModalOpen = action.payload;
    },
    setDarkMode(state, action) {
      state.darkMode = action.payload;
    },
  },
});

export const getHomeSelector = (state) => state.home;

export const { setIsLargeScreen, setIsRequestModalOpen, setDarkMode } =
  homeSlice.actions;

export default homeSlice.reducer;
