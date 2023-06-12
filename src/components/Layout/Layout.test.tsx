import renderWithProviders from "@/utils/testUtils/testUtils";
import Layout from "./Layout";
import { screen } from "@testing-library/react";

const mockedUsedRouter = jest.fn();
jest.mock("next/router", () => ({
  ...jest.requireActual("next/router"),
  useRouter: () => mockedUsedRouter,
}));

const mockedUseSession = jest.fn();
jest.mock("next-auth/react", () => ({
  ...jest.requireActual("next-auth/react"),
  useSession: () => mockedUseSession,
}));

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Bike'", () => {
      const headingText = "Bike";

      renderWithProviders(<Layout />);

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
