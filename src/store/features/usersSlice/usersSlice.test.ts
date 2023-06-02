import {
  expectedUserState,
  mockInitialUserState,
  mockUser,
} from "@/mocks/userMocks/userMocks";
import {
  loginUserActionCreator,
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
