import Header from "@/components/Header/Header";
import { render, screen } from "@testing-library/react";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the logo", () => {
      render(<Header />);

      const expectedLogo = screen.getByRole("img");

      expect(expectedLogo).toBeInTheDocument();
    });

    test("Then it should show a nav bar", () => {
      render(<Header />);

      const expectedNavBar = screen.getByRole("navigation");

      expect(expectedNavBar).toBeInTheDocument();
    });

    test("Then it should show a heading with the text 'BikeMeet'", () => {
      const headingText = "BikeMeet";

      render(<Header />);

      const expectedHeader = screen.getByRole("heading", { name: headingText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
