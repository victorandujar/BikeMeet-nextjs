import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  UserRegistrationStateStructure,
  UserState,
  UserStructure,
} from "./types/types";

const initialState: UserRegistrationStateStructure = {
  email: "",
  id: "",
  token: "",
  isLogged: false,
  confirmationCode: "",
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (
      currentUserState,
      action: PayloadAction<UserStructure>
    ): UserRegistrationStateStructure => ({
      ...currentUserState,
      email: action.payload.email,
      id: action.payload.id,
      token: action.payload.token,
      isLogged: true,
    }),
    registerUser: (
      currentUserState,
      action: PayloadAction<UserRegistrationStateStructure>
    ): UserRegistrationStateStructure => ({
      ...currentUserState,
      confirmationCode: action.payload.confirmationCode,
    }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  registerUser: registerUserActionCreator,
} = usersSlice.actions;
export const userReducer = usersSlice.reducer;
