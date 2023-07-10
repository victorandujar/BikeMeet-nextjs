import renderWithProviders from "@/utils/testUtils/testUtils";
import SearchBar from "./SearchBar";
import { screen } from "@testing-library/react";

describe("Given a SearchBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Search'", () => {
      const buttonText = "Search";

      renderWithProviders(<SearchBar />);

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
