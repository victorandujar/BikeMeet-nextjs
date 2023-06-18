import renderWithProviders from "@/utils/testUtils/testUtils";
import RidesList from "./RidesList";
import { ridesMocks } from "@/mocks/ridesMocks/ridesMocks";
import { screen } from "@testing-library/react";

describe("Given RidesList component", () => {
  describe("When rendered with two rides created by 'Arnau Rotger' and 'Jèssica Olivo'", () => {
    test("Then it should show two cards with said text on each", () => {
      const textFirstCreator = /arnau rotger/i;
      const textSecondCreator = /jèssica olivo/i;

      renderWithProviders(<RidesList rides={ridesMocks} />);
      const expectedTextGravel = screen.getByText(textFirstCreator);
      const expectedTextMtb = screen.getByText(textSecondCreator);

      expect(expectedTextMtb).toBeInTheDocument();
      expect(expectedTextGravel).toBeInTheDocument();
    });
  });
});
