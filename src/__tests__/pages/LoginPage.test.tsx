import LoginPage from "@/pages/login";
import theme from "@/styles/Theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Given a Login page component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the text 'Welcome to BikeMeet'", () => {
      const headerText = "Welcome to BikeMeet";

      render(
        <ThemeProvider theme={theme}>
          <LoginPage />
        </ThemeProvider>
      );

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Sign up'", () => {
      const linkText = "Sign up";

      render(
        <ThemeProvider theme={theme}>
          <LoginPage />
        </ThemeProvider>
      );

      const expectedButton = screen.getByRole("link", { name: linkText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
