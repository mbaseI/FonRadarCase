import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import homeReducer from "./pages/Home/homeSlice";
import loginReducer from "./pages/Login/loginSlice";
import detailReducer from "./pages/Detail/detailSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    home: homeReducer,
    detail: detailReducer,
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
