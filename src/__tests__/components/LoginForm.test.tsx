import { render, screen } from "@testing-library/react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/Theme";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Log in'", () => {
      const buttonText = "Log in";

      render(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });

    test("Then it should show a label with the text 'Password'", () => {
      const labelText = "Password";

      render(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );

      const expectedLabel = screen.getByLabelText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Log in with Goggle'", () => {
      const buttonText = "Log in with Google";

      render(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
