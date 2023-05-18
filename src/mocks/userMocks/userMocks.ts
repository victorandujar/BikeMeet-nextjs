import { CustomTokenPayload, UserCredentials } from "@/hooks/useUser/types";
import {
  UserState,
  UserStructure,
} from "@/store/features/usersSlice/types/types";

export const mockInitialUserState: UserState = {
  email: "",
  id: "",
  token: "",
  isLogged: false,
};

export const mockUser: UserStructure = {
  email: "victor@andujar.org",
  id: "dsfhjnasdjkfhdsk",
  token: "vik27634fvj",
};

export const expectedUserState: UserState = {
  email: "victor@andujar.org",
  id: "dsfhjnasdjkfhdsk",
  token: "vik27634fvj",
  isLogged: true,
};

export const mockUserCredentials: UserCredentials = {
  email: "victor@andujar.org",
  password: "12345678",
};

export const mockTokenPayload: CustomTokenPayload = {
  email: "victor@andujar.org",
  sub: "dsfhjnasdjkfhdsk",
};

export const mockToken: string = "vik27634fvj";
export const mockIsRemembered: boolean = false;

export const mockLoginUser: UserStructure = {
  email: mockTokenPayload.email,
  id: mockTokenPayload.sub,
  token: mockToken,
};
