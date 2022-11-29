import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customerDetail } from "../../config/models/customerDetail";

interface DetailReducerModel {
  customerDetail: customerDetail[];
}

const initialState: DetailReducerModel = {
  customerDetail: [],
};

export const getCustomer = createAsyncThunk(
  "detail/getCustomer",
  async (userId: any) => {
    const response = await fetch(
      `https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/customers/${userId}`
    );
    return await response.json();
  }
);

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (detail) => {
    detail.addCase(getCustomer.fulfilled, (state, action) => {
      state.customerDetail = action.payload;
    });
  },
});

export const selectDetail = (state: any) => state.detail;

export default detailSlice.reducer;
