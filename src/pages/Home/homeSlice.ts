import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Customer } from "../../config/models/customer";

export const fetchData = createAsyncThunk("home/fetchData", async () => {
  const response = await fetch(
    "https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/customers"
  );
  return await response.json();
});

interface HomeReducerModel {
  customers: Customer[];
}

const initialState: HomeReducerModel = {
  customers: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (home) => {
    home.addCase(fetchData.fulfilled, (state, action) => {
      state.customers = action.payload;
    });
  },
});

export const selectHome = (state: any) => state.home;

export default homeSlice.reducer;
