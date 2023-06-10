import LoginPage from "@/pages/login";
import renderWithProviders from "@/utils/testUtils/testUtils";
import { screen } from "@testing-library/react";

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
    test("Then it should show a header with the text 'Welcome rider'", () => {
      const headerText = "Welcome rider";

      renderWithProviders(<LoginPage />);

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Sign up'", () => {
      const linkText = "Sign up";

      renderWithProviders(<LoginPage />);

      const expectedButton = screen.getByRole("link", { name: linkText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
