import Header from "@/components/Header/Header";
import renderWithProviders from "@/utils/testUtils/testUtils";
import { screen } from "@testing-library/react";

const mockedUseSession = jest.fn();
jest.mock("next-auth/react", () => ({
  ...jest.requireActual("next-auth/react"),
  useSession: () => mockedUseSession,
}));

const mockedUseRouter = jest.fn();
jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: () => mockedUseRouter,
}));

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'BikeMeet'", () => {
      const headingText = "Bike";

      renderWithProviders(<Header />);

      const expectedHeader = screen.getByRole("heading", { name: headingText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
