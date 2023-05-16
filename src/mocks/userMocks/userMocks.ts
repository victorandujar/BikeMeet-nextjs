import {
  UserState,
  UserStructure,
} from "@/store/features/usersSlice/types/types";

export const initialUserState: UserState = {
  email: "",
  id: "",
  token: "",
  isLogged: false,
};

export const user: UserStructure = {
  email: "victor@andujar.es",
  id: "",
  token: "123qwe456rty",
};

export const expectedUserState: UserState = {
  email: "victor@andujar.es",
  id: "",
  token: "123qwe456rty",
  isLogged: true,
};
