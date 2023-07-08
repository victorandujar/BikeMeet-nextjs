import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./usersSlice/types/types";

const initialState: UserState = {
  email: "",
  id: "",
  token: "",
  isLogged: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = usersSlice.actions;
export const userReducer = usersSlice.reducer;
