import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState, UserStructure } from "./types/types";

const initialState: UserState = {
  email: "",
  id: "",
  token: "",
  isLogged: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (
      currentUserState,
      action: PayloadAction<UserStructure>
    ): UserState => ({
      ...currentUserState,
      email: action.payload.email,
      id: action.payload.id,
      token: action.payload.token,
      isLogged: true,
    }),

    logoutUser: (): UserState => ({ ...initialState }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = usersSlice.actions;
export const userReducer = usersSlice.reducer;
