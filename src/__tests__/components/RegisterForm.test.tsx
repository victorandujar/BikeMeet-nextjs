import RegisterForm from "@/components/RegisterForm/RegisterForm";
import renderWithProviders from "@/utils/testUtils/testUtils";
import { screen } from "@testing-library/react";

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
});
