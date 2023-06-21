import {
  CustomTokenPayload,
  UserCredentials,
  UserRegisterCredentials,
  UserRegisterCredentialsForm,
} from "@/hooks/useUser/types";
import {
  UserState,
  UserStructure,
} from "@/store/features/usersSlice/types/types";
import { Session } from "next-auth";

const testPassword = process.env.NEXT_PUBLIC_TEST_PASSWORD ?? "Mrv27634_";

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
  password: testPassword,
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

export const mockSession: Session = {
  user: {
    email: "victor@andujar.org",
    image: "/image",
    name: "Victor A.",
  },
  expires: "",
};

export const mockUserRegisterCredentialsForm: UserRegisterCredentialsForm = {
  email: "victor@andujar.org",
  name: "Víctor",
  surname: "Andújar",
  username: "Ammavaru",
  password: testPassword,
  repeat: testPassword,
};

export const mockUserRegisterCredentials: UserRegisterCredentials = {
  name: "Víctor",
  surname: "Andújar",
  username: "Ammavaru",
  email: "victor@andujar.org",
  password: testPassword,
};
