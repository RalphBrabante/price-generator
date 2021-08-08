import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormDataState {
  productCost?: number;
  shipmentCost?: number;
  shipmentNumberOfItems?: number;
  taxRate?: number;
  otherTaxesPercentage?: number;
  markupPercentage?: number;
}

const initialState: { object: FormDataState } = {
  object: {
    taxRate: 12,
    otherTaxesPercentage: 33,
    markupPercentage: 0,
  },
};

export const pcascSlice = createSlice({
  name: "pcasc",
  initialState,
  reducers: {
    calculate: (state, action: PayloadAction<FormDataState>) => {
      state.object = action.payload;
    },
  },
});

export const { calculate } = pcascSlice.actions;

const pscascReducer = pcascSlice.reducer;

export default pscascReducer;
