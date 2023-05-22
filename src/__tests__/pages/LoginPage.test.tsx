import LoginPage from "@/pages/login";
import { store } from "@/store/store";
import theme from "@/styles/Theme";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

const mockedUsedRouter = jest.fn();
jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: () => mockedUsedRouter,
}));

const mockedUseSession = jest.fn();
jest.mock("next-auth/react", () => ({
  ...jest.requireActual("next-auth/react"),
  useSession: () => mockedUseSession,
}));

describe("Given a Login page component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the text 'Welcome to BikeMeet'", () => {
      const headerText = "Welcome to BikeMeet";

      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </ThemeProvider>
      );

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Sign up'", () => {
      const linkText = "Sign up";

      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </ThemeProvider>
      );
      const expectedButton = screen.getByRole("link", { name: linkText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
