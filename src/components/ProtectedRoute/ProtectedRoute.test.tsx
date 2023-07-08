import { screen } from "@testing-library/react";
import ProtectedRoute from "./ProtectedRoute";
import renderWithProviders from "@/utils/testUtils/testUtils";

const mockUsedRouter = jest.fn();
jest.mock("next/router", () => ({
  ...jest.requireActual("next/router"),
  useRouter: () => mockUsedRouter,
}));

const mockedUseSession = jest.fn();
jest.mock("next-auth/react", () => ({
  ...jest.requireActual("next-auth/react"),
  useSession: () => mockedUseSession,
}));

describe("Given a ProtectedRoute component", () => {
  describe("When it is rendered", () => {
    test("Then it should render children when user is authenticated and path is allowed", () => {
      const useSessionMock = {
        data: {},
        status: "authenticated",
      };
      const getSessionMock = jest.fn().mockResolvedValue({});

      jest
        .spyOn(require("next-auth/react"), "useSession")
        .mockReturnValue(useSessionMock);
      jest
        .spyOn(require("next-auth/react"), "getSession")
        .mockReturnValue(getSessionMock);

      renderWithProviders(
        <ProtectedRoute>
          <div data-testid="protected-content">Protected Content</div>
        </ProtectedRoute>
      );

      expect(getSessionMock).not.toHaveBeenCalled();
    });

    test("Then it should redirect to login page when user is not authenticated and path is not allowed", () => {
      const useSessionMock = {
        data: null,
        status: "unauthenticated",
      };
      const getSessionMock = jest.fn().mockResolvedValue(null);

      jest
        .spyOn(require("next-auth/react"), "useSession")
        .mockReturnValue(useSessionMock);
      jest
        .spyOn(require("next-auth/react"), "getSession")
        .mockReturnValue(getSessionMock);

      renderWithProviders(
        <ProtectedRoute>
          <div data-testid="protected-content">Protected Content</div>
        </ProtectedRoute>
      );

      expect(getSessionMock).not.toHaveBeenCalled();
      expect(screen.queryByTestId("protected-content")).toBeNull();
    });

    test("Then it should redirect to dashboard when user is authenticated and on login/signup page", () => {
      const useSessionMock = {
        data: {},
        status: "authenticated",
      };
      const getSessionMock = jest.fn().mockResolvedValue({});

      jest
        .spyOn(require("next-auth/react"), "useSession")
        .mockReturnValue(useSessionMock);
      jest
        .spyOn(require("next-auth/react"), "getSession")
        .mockReturnValue(getSessionMock);

      renderWithProviders(
        <ProtectedRoute>
          <div data-testid="protected-content">Protected Content</div>
        </ProtectedRoute>
      );

      expect(getSessionMock).not.toHaveBeenCalled();
      expect(screen.queryByTestId("protected-content")).toBeNull();
    });
  });
});
