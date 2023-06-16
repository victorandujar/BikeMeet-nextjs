import renderWithProviders from "@/utils/testUtils/testUtils";
import Ride from "@/components/Ride/Ride";
import { screen } from "@testing-library/react";
import { ridesMocks } from "@/mocks/ridesMocks/ridesMocks";

describe("Given a Ride component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button to join the ride", () => {
      const mockRide = ridesMocks[0];
      const buttonText = "join the ride";

      renderWithProviders(<Ride ride={mockRide} />);
      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
