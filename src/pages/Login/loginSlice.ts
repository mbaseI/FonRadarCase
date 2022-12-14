import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../config/models/user";
import { RootState } from "../../store";

export const getUsers = createAsyncThunk("login/getUsers", async () => {
  const response = await fetch(
    "https://6215eeb77428a1d2a354c664.mockapi.io/api/v1/users"
  );
  return await response.json();
});

interface LoginReducerModel {
  users: User[];
}

const initialState: LoginReducerModel = {
  users: [],
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (login) => {
    login.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const selectLogin = (state: RootState) => state.login;

export default loginSlice.reducer;
