import { ridesMocks } from "@/mocks/ridesMocks/ridesMocks";
import renderWithProviders from "@/utils/testUtils/testUtils";
import CreateForm from "./CreateForm";
import { act, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
});
