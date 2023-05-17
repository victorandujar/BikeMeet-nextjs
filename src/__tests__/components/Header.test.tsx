import Header from "@/components/Header/Header";
import { store } from "@/store/store";
import theme from "@/styles/Theme";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the logo", () => {
      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Header />
          </Provider>
        </ThemeProvider>
      );

      const expectedLogo = screen.getByRole("img");

      expect(expectedLogo).toBeInTheDocument();
    });

    test("Then it should show a heading with the text 'BikeMeet'", () => {
      const headingText = "Bike";

      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Header />
          </Provider>
        </ThemeProvider>
      );

      const expectedHeader = screen.getByRole("heading", { name: headingText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
