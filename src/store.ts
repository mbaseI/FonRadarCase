import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import loginReducer from "./pages/Login/loginSlice";
import homeReducer from "./pages/Home/homeSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    home: homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
