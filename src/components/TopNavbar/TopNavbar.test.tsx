import { screen } from "@testing-library/react";
import TopNavbar from "./TopNavbar";
import renderWithProviders from "@/utils/testUtils/testUtils";

describe("Given a TopNavbar component", () => {
  describe("When rendered", () => {
    test("Then it should show a text with the labels `Home`, `Nearby`, `Create`, `Favourites` and `Profile`", () => {
      const labels = ["Home", "Nearby", "Create", "Favourites"];

      renderWithProviders(<TopNavbar />);

      labels.forEach((label) => {
        const labelElement = screen.getByText(label);
        expect(labelElement).toBeInTheDocument();
      });
    });
  });
});
