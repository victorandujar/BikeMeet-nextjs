import { render, screen } from "@testing-library/react";
import TopNavbar from "./TopNavbar";

describe("Given a TopNavbar component", () => {
  describe("When rendered", () => {
    test("Then it should show a text with the labels `Home`, `Nearby`, `Create`, `Favourites` and `Profile`", () => {
      const labels = ["Home", "Nearby", "Create", "Profile", "Favourites"];

      render(<TopNavbar />);

      labels.forEach((label) => {
        const labelElement = screen.getByText(label);
        expect(labelElement).toBeInTheDocument();
      });
    });
  });
});
