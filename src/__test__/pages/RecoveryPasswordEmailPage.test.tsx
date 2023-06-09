import RecoveryPasswordEmailPage from "@/pages/recovery-email/[validate-email]";
import renderWithProviders from "@/utils/testUtils/testUtils";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockedUsedRouter = jest.fn();
jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: () => mockedUsedRouter,
}));

const mockCheckEmail = jest.fn();
jest.mock("../../hooks/useUser/useUser", () => () => ({
  checkUserEmail: mockCheckEmail,
}));

describe("Given a RecoveryPasswordEmailPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Recovery email confirmation'", () => {
      const headingText = "Recovery email confirmation";

      renderWithProviders(<RecoveryPasswordEmailPage />);

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });

  describe("When the user writes in the email input", () => {
    test("Then it changes the state of this input", async () => {
      const emailPlaceHolderText = "Enter an email";
      const emailText = "victor@andujar.org";

      renderWithProviders(<RecoveryPasswordEmailPage />);

      const emailInput = screen.getByPlaceholderText(emailPlaceHolderText);

      await waitFor(async () => await userEvent.type(emailInput, emailText));

      expect(emailInput).toHaveValue(emailText);
    });
  });

  describe("When the user submits the info to send the email", () => {
    test("Then the checkUserEmail function should be called", async () => {
      const emailPlaceHolderText = "Enter an email";
      const emailText = "victor@andujar.org";
      const buttonText = "Send recovery email";

      renderWithProviders(<RecoveryPasswordEmailPage />);

      const emailInput = screen.getByPlaceholderText(emailPlaceHolderText);
      const expectedSubmitButton = screen.getByRole("button", {
        name: buttonText,
      });

      await waitFor(async () => await userEvent.type(emailInput, emailText));
      await waitFor(async () => await userEvent.click(expectedSubmitButton));

      expect(mockCheckEmail).toHaveBeenCalled();
    });
  });
});
