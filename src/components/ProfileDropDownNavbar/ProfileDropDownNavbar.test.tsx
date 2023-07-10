import renderWithProviders from "@/utils/testUtils/testUtils";
import ProfileDropDownNavbar from "./ProfileDropDownNavbar";
import { screen } from "@testing-library/react";

describe("Given a ProfileDropDownNavbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button", () => {
      renderWithProviders(<ProfileDropDownNavbar />);

      const expectedButton = screen.getByRole("button");

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
