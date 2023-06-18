import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState, UserStructure } from "./types/types";

const initialState: UserState = {
  email: "",
  id: "",
  token: "",
  isLogged: true,
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
  },
});

export const { loginUser: loginUserActionCreator } = usersSlice.actions;
export const userReducer = usersSlice.reducer;
