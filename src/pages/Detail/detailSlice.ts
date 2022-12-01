import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customerDetail } from "../../config/models/customerDetail";
import { RootState } from "../../store";

interface DetailReducerModel {
  customerDetail: customerDetail;
}

const initialState: DetailReducerModel = {
  customerDetail: {
    companyName: "",
    contactNumber: "",
    id: "",
    invoiceCount: 0,
    taxNumber: "",
    taxOffice: "",
  },
};

export const getCustomer = createAsyncThunk(
  "detail/getCustomer",
  async (userId: string) => {
    const response = await fetch(
      `https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/customers/${userId}`
    );
    return await response.json();
  }
);

export const deleteCustomer = createAsyncThunk(
  "detail/deleteCustomer",
  async (userId: string) => {
    const response = await fetch(
      `https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/customers/${userId}`,
      {
        method: "DELETE",
      }
    );

    return await response.json();
  }
);

export const editCustomer = createAsyncThunk(
  "detail/editCustomer",
  async ({ userId, values }: { userId: string; values: customerDetail }) => {
    const response = await fetch(
      `https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/customers/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
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

export const selectDetail = (state: RootState) => state.detail;

export default detailSlice.reducer;
