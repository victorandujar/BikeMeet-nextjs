import { act, screen } from "@testing-library/react";
import LoginForm from "../../components/LoginForm/LoginForm";
import userEvent from "@testing-library/user-event";
import {
  mockIsRemembered,
  mockUserCredentials,
} from "@/mocks/userMocks/userMocks";
import renderWithProviders from "@/utils/testUtils/testUtils";

const mockedUsedRouter = jest.fn();
jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: () => mockedUsedRouter,
}));

const mockedUseSession = jest.fn();
jest.mock("next-auth/react", () => ({
  ...jest.requireActual("next-auth/react"),
  useSession: () => mockedUseSession,
}));

const mockLoginUser = jest.fn();
jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
}));

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Log in'", () => {
      const buttonText = "Log in";

      renderWithProviders(<LoginForm />);

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show a label with the text 'Password'", () => {
      const labelText = "Password";

      renderWithProviders(<LoginForm />);

      const expectedLabel = screen.getByLabelText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Log in with Goggle'", () => {
      const buttonText = "Log in with Google";

      renderWithProviders(<LoginForm />);

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When the user writes in the email input", () => {
    test("Then it changes the state of this input", async () => {
      const emailLabel = "Email address";
      const emailText = "victor@andujar.org";

      renderWithProviders(<LoginForm />);

      const emailInput = screen.getByLabelText(emailLabel);

      await act(async () => await userEvent.type(emailInput, emailText));

      expect(emailInput).toHaveValue(emailText);
    });
  });

  describe("When the user writes in the password input", () => {
    test("Then it changes the state of this input", async () => {
      const passwordLabel = "Password";
      const passwordText = "12345678";

      renderWithProviders(<LoginForm />);

      const passwordInput = screen.getByLabelText(passwordLabel);

      await act(async () => await userEvent.type(passwordInput, passwordText));

      expect(passwordInput).toHaveValue(passwordText);
    });
  });

  describe("When te user submits e form information to log in", () => {
    test("Then the loginUser function should be called", async () => {
      const emailInputPlaceholderText = "Enter a valid email";
      const passwordInputPlaceholderText = "Password. Max 8 characters";
      const buttonText = "Log in";

      renderWithProviders(<LoginForm />);

      const expectedEmailInput = screen.getByPlaceholderText(
        emailInputPlaceholderText
      );
      const expectedPasswordInput = screen.getByPlaceholderText(
        passwordInputPlaceholderText
      );
      const expectedSubmitButton = screen.getByRole("button", {
        name: buttonText,
      });

      await act(
        async () =>
          await userEvent.type(expectedEmailInput, mockUserCredentials.email)
      );

      await act(
        async () =>
          await userEvent.type(
            expectedPasswordInput,
            mockUserCredentials.password
          )
      );
      await act(async () => await userEvent.click(expectedSubmitButton));

      expect(mockLoginUser).toHaveBeenCalledWith(
        mockUserCredentials,
        mockIsRemembered
      );
    });
  });
});
