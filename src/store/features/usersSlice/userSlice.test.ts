import { User } from "@/components/ProfileCard/types";
import { mockUserProfileData } from "@/mocks/userMocks/userMocks";
import { getUserDataActionCreator, userReducer } from "./userSlice";

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
  },
};

describe("Given a userReducer", () => {
  describe("When it receives a new state and the action to get the user", () => {
    test("Then it should return the user data", () => {
      const user: User = mockUserProfileData;

      const getUserAction = getUserDataActionCreator(user);

      const newUserState = userReducer(initialState, getUserAction);

      expect(newUserState).toStrictEqual(user);
    });
  });
});
