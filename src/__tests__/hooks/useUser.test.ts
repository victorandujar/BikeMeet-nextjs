import useUser from "@/hooks/useUser/useUser";
import Wrapper from "@/mocks/Wrapper";
import {
  mockLoginUser,
  mockTokenPayload,
  mockUserCredentials,
} from "@/mocks/userMocks/userMocks";
import { loginUserActionCreator } from "@/store/features/usersSlice/usersSlice";
import { store } from "@/store/store";
import { renderHook } from "@testing-library/react";
import decodeToken from "jwt-decode";

jest.mock("axios", () => ({
  ...jest.requireActual("axios"),
  post: jest.fn().mockReturnValue({ data: { token: "vik27634fvj" } }),
}));

const mockedUseRouter = {
  push: jest.fn(),
};

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: () => mockedUseRouter,
}));

jest.mock("jwt-decode", () => jest.fn());

const spyDispatch = jest.spyOn(store, "dispatch");

beforeAll(() => {
  jest.clearAllMocks();
});

describe("Given a useUser custom hook", () => {
  describe("When the loginUser function is called", () => {
    test("Then it should call the dispatch with loginUserAction creator action", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      await loginUser(mockUserCredentials);

      expect(spyDispatch).toHaveBeenCalledWith(
        loginUserActionCreator(mockLoginUser)
      );
    });
  });
});
