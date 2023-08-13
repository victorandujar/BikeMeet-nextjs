import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "@/components/ProfileCard/types";

const initialState: User = {
  user: {
    email: "",
    followers: [],
    following: [],
    image: "",
    location: "",
    name: "",
    rate: 0,
    rides: 0,
    surname: "",
    username: "",
    id: "",
  },
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserData: (currentState, action: PayloadAction<User>): User => ({
      ...currentState,
      user: {
        email: action.payload.user.email,
        followers: action.payload.user.followers,
        following: action.payload.user.following,
        image: action.payload.user.image,
        location: action.payload.user.location,
        name: action.payload.user.name,
        rate: action.payload.user.rate,
        rides: action.payload.user.rides,
        surname: action.payload.user.surname,
        username: action.payload.user.username,
        id: action.payload.user.id,
      },
    }),
  },
});

export const { getUserData: getUserDataActionCreator } = usersSlice.actions;
export const userReducer = usersSlice.reducer;
