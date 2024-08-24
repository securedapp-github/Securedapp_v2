import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialPaymentState = {
  paymentModal: false,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState: initialPaymentState,
  reducers: {
    setPaymentModal(state, action) {
      state.paymentModal = action.payload;
    },
  },
});

export const getPaymentSelector = createSelector(
  (state) => state.payment,
  (state) => state
);

export const { setPaymentModal } = paymentSlice.actions;

export default paymentSlice.reducer;
