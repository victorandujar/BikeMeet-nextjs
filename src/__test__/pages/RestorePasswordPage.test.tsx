import RestorePasswordPage from "@/pages/restore-password/[userId]";
import renderWithProviders from "@/utils/testUtils/testUtils";
import { act, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockedUsedRouter = jest.fn();
jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: () => mockedUsedRouter,
}));

const mockedUseRouter = {
  query: { userId: "mockedUserId" },
};

jest.mock("next/router", () => ({
  useRouter: () => mockedUseRouter,
}));

const mockRestorePassword = jest.fn();
jest.mock("../../hooks/useUser/useUser", () => () => ({
  resetUserPassword: mockRestorePassword,
}));

describe("Given a RestorePasswordPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Restore password'", () => {
      const headingText = "Restore password";

      renderWithProviders(<RestorePasswordPage />);

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });

  describe("When the user writes in the password input", () => {
    test("Then it changes the state of this input", async () => {
      const passwordLabel = "Password";
      const passwordText = "12345678";

      renderWithProviders(<RestorePasswordPage />);

      const passwordInput = screen.getByLabelText(passwordLabel);

      await waitFor(
        async () => await userEvent.type(passwordInput, passwordText)
      );

      expect(passwordInput).toHaveValue(passwordText);
    });
  });

  describe("When the user submits the info to send the new password", () => {
    test("Then the resetUserPassword function should be called", async () => {
      const passwordPlaceHolderText = "Enter the new password";
      const repeatPasswordPlaceHolderText = "Repeat the new password";
      const passwordText = "1234567890";
      const repeatPasswordText = "1234567890";
      const buttonText = "Reset password";

      renderWithProviders(<RestorePasswordPage />);

      const passwordInput = screen.getByPlaceholderText(
        passwordPlaceHolderText
      );
      const repeatPasswordInput = screen.getByPlaceholderText(
        repeatPasswordPlaceHolderText
      );
      const expectedSubmitButton = screen.getByRole("button", {
        name: buttonText,
      });

      await waitFor(async () => {
        await userEvent.type(passwordInput, passwordText);
        await userEvent.type(repeatPasswordInput, repeatPasswordText);
        await userEvent.click(expectedSubmitButton);
      });

      expect(mockRestorePassword).not.toHaveBeenCalled();
    });
  });
});
