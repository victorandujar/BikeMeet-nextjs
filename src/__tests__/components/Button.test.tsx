import Button from "@/components/Button/Button";
import theme from "@/styles/Theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Search'", () => {
      const buttonText = "Search";

      render(
        <ThemeProvider theme={theme}>
          <Button isDisabled={false} text={buttonText} />
        </ThemeProvider>
      );

      const expectedButton = screen.getByRole("button");

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
