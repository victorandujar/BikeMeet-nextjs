import LoginPage from "@/pages/login";
import { render, screen } from "@testing-library/react";

describe("Given a Login page component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the text 'Welcome to BikeMeet'", () => {
      const headerText = "Welcome to BikeMeet";

      render(<LoginPage />);

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Sign up'", () => {
      const buttonText = "Sign up";

      render(<LoginPage />);

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
