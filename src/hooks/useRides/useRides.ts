import apiClient from "@/api/apiClient";
import { ridesEndpoints } from "@/api/ridesEndpoints";
import { RideFormData } from "./types";
import createFormData from "@/utils/FormData/CreateFormData";

interface UseRidesStructure {
  getRides: () => {};
  createRide: (ride: RideFormData) => void;
}

const { getAllRides, rides, createNewRide } = ridesEndpoints;

const useRides = (): UseRidesStructure => {
  const getRides = async () => {
    const response = await apiClient.get(`${rides}${getAllRides}`);

    return response.data;
  };

  const createRide = async (ride: RideFormData) => {
    const rideData = createFormData(ride);

    await apiClient.post(`${rides}${createNewRide}`, rideData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return { getRides, createRide };
};

export default useRides;
