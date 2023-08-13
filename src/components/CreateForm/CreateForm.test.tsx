import { ridesMocks } from "@/mocks/ridesMocks/ridesMocks";
import renderWithProviders from "@/utils/testUtils/testUtils";
import CreateForm from "./CreateForm";
import { act, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "../../hooks/useUser/useUser";

describe("Given a CreateForm component", () => {
  describe("When it is rendered and the user writes in the Ride Name input", () => {
    test("Then it changes the state of this input", async () => {
      const rideNameLabel = "Name your next adventure";
      const rideNameText = ridesMocks[0].title;

      renderWithProviders(<CreateForm />);

      const rideNameInput = screen.getByLabelText(rideNameLabel);

      await act(async () => await userEvent.type(rideNameInput, rideNameText));

      expect(rideNameInput).toHaveValue(rideNameText);
    });
  });

  describe("When the user writes in the distance input", () => {
    test("Then it should changes the state of this input", async () => {
      const distanceLabel = "How far do you want to go?";
      const ditanceNumber = 23;

      renderWithProviders(<CreateForm />);

      const distanceInput = screen.getByLabelText(distanceLabel);

      await waitFor(
        async () =>
          await userEvent.type(distanceInput, ditanceNumber.toString())
      );

      expect(distanceInput).toHaveValue(ditanceNumber);
    });
  });
});
