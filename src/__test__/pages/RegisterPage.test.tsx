import SignUpPage from "@/pages/sign-up";
import renderWithProviders from "@/utils/testUtils/testUtils";
import { screen } from "@testing-library/react";

const mockedUseRouter = {
  push: jest.fn(),
};

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: () => mockedUseRouter,
}));

const mockedUseSession = jest.fn();
jest.mock("next-auth/react", () => ({
  ...jest.requireActual("next-auth/react"),
  useSession: () => mockedUseSession,
}));

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
