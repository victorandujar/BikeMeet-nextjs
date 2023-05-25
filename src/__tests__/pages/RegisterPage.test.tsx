import SignUpPage from "@/pages/sign-up";
import renderWithProviders from "@/utils/testUtils/testUtils";
import { screen } from "@testing-library/react";

describe("Given a RegisterPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Join our community!'", () => {
      const headingText = "Join our community!";

      renderWithProviders(<SignUpPage />);

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
