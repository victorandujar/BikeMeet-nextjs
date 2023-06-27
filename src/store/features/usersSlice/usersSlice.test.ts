import {
  expectedUserState,
  initialState,
  mockInitialUserState,
  mockUser,
} from "@/mocks/userMocks/userMocks";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "@/store/features/usersSlice/usersSlice";

describe("Given a userSlice and the loginUser function", () => {
  describe("When it receives a new state and the action to log in a user", () => {
    test("Then it should return the user with its isLogged property set as true", () => {
      const loginAction = loginUserActionCreator(mockUser);

      const newUserState = userReducer(mockInitialUserState, loginAction);

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });
});

describe("Given a userSlice and the logoutUser function", () => {
  describe("When it receives a new state and the action to log out a user", () => {
    test("Then it should return the user with its isLogged property set as false", () => {
      const logoutAction = logoutUserActionCreator();

      const newUserState = userReducer(initialState, logoutAction);

      expect(newUserState).toStrictEqual(initialState);
    });
  });
});
