import renderWithProviders from "@/utils/testUtils/testUtils";
import Layout from "./Layout";
import { screen } from "@testing-library/react";
import LoginForm from "../LoginForm/LoginForm";

const mockedUsedRouter = jest.fn();
jest.mock("next/router", () => ({
  ...jest.requireActual("next/router"),
  useRouter: () => mockedUsedRouter,
}));

const mockedUseRouter = jest.fn();
jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: () => mockedUseRouter,
}));

const mockedUseSession = jest.fn();
jest.mock("next-auth/react", () => ({
  ...jest.requireActual("next-auth/react"),
  useSession: () => mockedUseSession,
}));

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Bike'", () => {
      const headingText = "Bike";

      renderWithProviders(
        <Layout>
          <LoginForm />
        </Layout>
      );

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
