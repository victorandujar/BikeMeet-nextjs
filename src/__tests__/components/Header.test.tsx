import Header from "@/components/Header/Header";
import renderWithProviders from "@/utils/testUtils/testUtils";
import { screen } from "@testing-library/react";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the logo", () => {
      renderWithProviders(<Header />);

      const expectedLogo = screen.getByRole("img");

      expect(expectedLogo).toBeInTheDocument();
    });

    test("Then it should show a heading with the text 'BikeMeet'", () => {
      const headingText = "Bike";

      renderWithProviders(<Header />);

      const expectedHeader = screen.getByRole("heading", { name: headingText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
