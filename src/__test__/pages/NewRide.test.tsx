import NewRide from "@/pages/new-ride";
import renderWithProviders from "@/utils/testUtils/testUtils";
import { screen } from "@testing-library/react";

describe("Given a NewRide page component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the text 'Basic information'", () => {
      const headerText = "Basic information";

      renderWithProviders(<NewRide />);

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
