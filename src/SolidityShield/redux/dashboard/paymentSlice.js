import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialPaymentState = {
  paymentModal: false,
  selectedPlan: 1,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState: initialPaymentState,
  reducers: {
    setPaymentModal(state, action) {
      state.paymentModal = action.payload;
    },
    setPlan(state, action) {
      state.selectedPlan = action.payload;
    },
  },
});

export const getPaymentSelector = createSelector(
  (state) => state.payment,
  (state) => state
);

export const { setPaymentModal, setPlan } = paymentSlice.actions;

export default paymentSlice.reducer;
