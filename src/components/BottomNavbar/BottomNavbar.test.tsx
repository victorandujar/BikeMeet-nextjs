import { render, screen } from "@testing-library/react";
import BottomNavbar from "./BottomNavbar";

describe("Given a BottomNavbar component", () => {
  describe("When rendered", () => {
    test("Then it should show a text with the labels `Home`, `Nearby`, `Create & `Favourites`", () => {
      const labels = ["Home", "Nearby", "Create", "Favourites"];

      render(<BottomNavbar />);

      labels.forEach((label) => {
        const labelElement = screen.getByText(label);
        expect(labelElement).toBeInTheDocument();
      });
    });
  });
});
