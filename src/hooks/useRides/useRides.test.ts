import apiClient from "../../api/apiClient";
import { ridesEndpoints } from "@/api/ridesEndpoints";
import useRides from "./useRides";
import { ridesMocks } from "@/mocks/ridesMocks/ridesMocks";

jest.mock("../../api/apiClient");

describe("Given a useRides custom hook", () => {
  describe("When it is called", () => {
    const { getAllRides, rides } = ridesEndpoints;

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("Then getRides should fetch rides data from the API", async () => {
      const mockResponse = {
        data: ridesMocks,
      };
      apiClient.get = jest.fn().mockResolvedValueOnce(mockResponse);

      const { getRides } = useRides();
      const ridesData = await getRides();

      expect(apiClient.get).toHaveBeenCalledWith(`${rides}${getAllRides}`);
      expect(ridesData).toEqual(mockResponse.data);
    });
  });
});
