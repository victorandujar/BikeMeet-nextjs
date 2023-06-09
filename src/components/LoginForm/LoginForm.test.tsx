import { screen, waitFor } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";
import { mockUserCredentials } from "@/mocks/userMocks/userMocks";
import renderWithProviders from "@/utils/testUtils/testUtils";

const mockedUsedRouter = jest.fn();
jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: () => mockedUsedRouter,
}));

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

const mockLoginUser = jest.fn();
const mockCheckEmail = jest.fn();
jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
  checkUserIsVerified: mockCheckEmail,
}));

const password = process.env.NEXT_PUBLIC_TEST_PASSWORD ?? "1234567890";

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

      await waitFor(async () => await userEvent.type(emailInput, emailText));

      expect(emailInput).toHaveValue(emailText);
    });
  });

  describe("When the user writes in the password input", () => {
    test("Then it changes the state of this input", async () => {
      const passwordLabel = "Password";

      renderWithProviders(<LoginForm />);

      const passwordInput = screen.getByLabelText(passwordLabel);

      await waitFor(async () => await userEvent.type(passwordInput, password));

      expect(passwordInput).toHaveValue(password);
    });
  });

  describe("When te user submits e form information to log in", () => {
    test("Then the loginUser function should be called", async () => {
      const emailInputPlaceholderText = "Enter a valid email";
      const passwordInputPlaceholderText = "Password. Max 10 characters";
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

      await waitFor(
        async () =>
          await userEvent.type(expectedEmailInput, mockUserCredentials.email)
      );

      await waitFor(
        async () =>
          await userEvent.type(
            expectedPasswordInput,
            mockUserCredentials.password
          )
      );

      await waitFor(async () => await userEvent.click(expectedSubmitButton));

      expect(mockCheckEmail).toHaveBeenCalled();
    });
  });
});
