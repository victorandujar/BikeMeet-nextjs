import RegisterForm from "@/components/RegisterForm/RegisterForm";
import {
  mockUserRegisterCredentials,
  mockUserRegisterCredentialsForm,
} from "@/mocks/userMocks/userMocks";
import renderWithProviders from "@/utils/testUtils/testUtils";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockedUseRouter = {
  push: jest.fn(),
};

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: () => mockedUseRouter,
}));

const mockRegisterUser = jest.fn();
jest.mock("../../hooks/useUser/useUser", () => () => ({
  registerUser: mockRegisterUser,
}));

const password = process.env.NEXT_PUBLIC_TEST_PASSWORD ?? "1234567890";

describe("Given a RegisterForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an input with a placeholder text 'Enter your first name'", () => {
      const placeholderText = "Enter your first name";

      renderWithProviders(<RegisterForm />);

      const expectedInput = screen.getByPlaceholderText(placeholderText);

      expect(expectedInput).toBeInTheDocument();
    });

    test("Then it shoud show a button with the text 'Join us!'", () => {
      const buttonText = "Join us!";

      renderWithProviders(<RegisterForm />);

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When the user writes in the form inputs", () => {
    test("Then it should change the state of each input", async () => {
      const nameLabel = "Name";
      const surnameLabel = "Surname";
      const usernameLabel = "Username";
      const emailLabel = "Email adress";
      const passwordLabel = "Password";
      const repeatPasswordLabel = "Repeat password";

      const nameText = mockUserRegisterCredentialsForm.name;
      const surnameText = mockUserRegisterCredentialsForm.surname;
      const usernameText = mockUserRegisterCredentialsForm.username;
      const emailText = mockUserRegisterCredentialsForm.email;
      const repeatPasswordText = mockUserRegisterCredentialsForm.repeat;

      renderWithProviders(<RegisterForm />);

      const nameInput = screen.getByLabelText(nameLabel);
      const surnameInput = screen.getByLabelText(surnameLabel);
      const usernameInput = screen.getByLabelText(usernameLabel);
      const emailInput = screen.getByLabelText(emailLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);
      const repeatPasswordInput = screen.getByLabelText(repeatPasswordLabel);

      await waitFor(async () => await userEvent.type(nameInput, nameText));
      await waitFor(
        async () => await userEvent.type(surnameInput, surnameText)
      );
      await waitFor(
        async () => await userEvent.type(usernameInput, usernameText)
      );
      await waitFor(async () => await userEvent.type(emailInput, emailText));
      await waitFor(async () => await userEvent.type(passwordInput, password));
      await waitFor(
        async () =>
          await userEvent.type(repeatPasswordInput, repeatPasswordText)
      );

      expect(nameInput).toHaveValue(nameText);
      expect(surnameInput).toHaveValue(surnameText);
      expect(usernameInput).toHaveValue(usernameText);
      expect(emailInput).toHaveValue(emailText);
      expect(passwordInput).toHaveValue(password);
      expect(repeatPasswordInput).toHaveValue(repeatPasswordText);
    });
  });

  describe("When the user submits the form information to register", () => {
    test("Then the registerUser function has to be called", async () => {
      const namePlaceholderText = "Enter your first name";
      const surnamePlaceholderText = "Enter your surname";
      const usernamePlaceholderText = "Create a username";
      const emailPlaceHolderText = "Enter a valid email";
      const passwordPlaceholderText = "Password. 10 characters";
      const repeatPasswordPlaceholderText = "Repeat password";
      const buttonText = "Join us!";

      renderWithProviders(<RegisterForm />);

      const expectedNameInput =
        screen.getByPlaceholderText(namePlaceholderText);
      const expectedSurnameInput = screen.getByPlaceholderText(
        surnamePlaceholderText
      );
      const expectedUsernameInput = screen.getByPlaceholderText(
        usernamePlaceholderText
      );
      const expectedEmailInput =
        screen.getByPlaceholderText(emailPlaceHolderText);
      const expectedPasswordInput = screen.getByPlaceholderText(
        passwordPlaceholderText
      );
      const expectedRepeatPassswordInput = screen.getByPlaceholderText(
        repeatPasswordPlaceholderText
      );
      const expectedSubmitButton = screen.getByRole("button", {
        name: buttonText,
      });

      await waitFor(
        async () =>
          await userEvent.type(
            expectedNameInput,
            mockUserRegisterCredentialsForm.name
          )
      );
      await waitFor(
        async () =>
          await userEvent.type(
            expectedSurnameInput,
            mockUserRegisterCredentialsForm.surname
          )
      );
      await waitFor(
        async () =>
          await userEvent.type(
            expectedUsernameInput,
            mockUserRegisterCredentialsForm.username
          )
      );
      await waitFor(
        async () =>
          await userEvent.type(
            expectedEmailInput,
            mockUserRegisterCredentialsForm.email
          )
      );
      await waitFor(
        async () =>
          await userEvent.type(
            expectedPasswordInput,
            mockUserRegisterCredentialsForm.password
          )
      );
      await waitFor(
        async () =>
          await userEvent.type(
            expectedRepeatPassswordInput,
            mockUserRegisterCredentialsForm.repeat
          )
      );

      await waitFor(async () => await userEvent.click(expectedSubmitButton));

      expect(mockRegisterUser).toHaveBeenCalledWith(
        mockUserRegisterCredentials
      );
    });
  });
});
