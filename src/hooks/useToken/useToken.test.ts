import { useAppDispatch } from "@/store/hooks";
import { CustomTokenPayload } from "../useUser/types";
import decodeToken from "@/utils/decodeToken";
import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import Wrapper from "@/mocks/Wrapper";

jest.mock("../../store/hooks");

const mockTokenPayload: CustomTokenPayload = {
  email: "victor@andujar.org",
  sub: "12345678",
};

jest.mock("jwt-decode", () => () => mockTokenPayload);

beforeAll(() => {
  jest.clearAllMocks();
});

describe("Given a useToken custom hook", () => {
  describe("When a token exists", () => {
    test("Then it should call the dispatch", () => {
      const mockToken = "vik27634fvj";
      localStorage.setItem("token", mockToken);

      const dispatchMock = jest.fn();

      (useAppDispatch as jest.Mock).mockReturnValue(dispatchMock);

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      getToken();

      expect(dispatchMock).toHaveBeenCalled();

      localStorage.clear();
    });

    test("Then it should remove token from local storage", () => {
      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      removeToken();

      expect(localStorage.getItem("token")).toBeNull();
    });
  });

  describe("When its getToken function is called but there is no token", () => {
    test("Then it should not call loginUserActionCreator", () => {
      const dispatchMock = jest.fn();

      (useAppDispatch as jest.Mock).mockReturnValue(dispatchMock);

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: Wrapper,
      });

      getToken();

      expect(dispatchMock).not.toHaveBeenCalled();
    });
  });
});
