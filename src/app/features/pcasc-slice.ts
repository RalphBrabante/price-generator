import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormDataState {
  productCost?: number;
  shipmentCost?: number;
  shipmentNumberOfItems?: number;
  taxRate?: number;
  otherTaxesPercentage?: number;
}

const initialState: { object: FormDataState } = {
  object: {},
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
