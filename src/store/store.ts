import {
  configureStore,
  type ThunkAction,
  type Action,
} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type RootState = ReturnType<typeof store.getState>;
