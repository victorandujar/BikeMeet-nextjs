import apiClient from "@/api/apiClient";
import { rideEndpoints } from "@/utils/endpoints/endpoints";

interface UseRidesStructure {
  getRides: () => {};
}

const useRides = (): UseRidesStructure => {
  const getRides = async () => {
    const response = await apiClient.get(
      `${rideEndpoints.rides}${rideEndpoints.getAllRides}`
    );

    return response.data;
  };

  return { getRides };
};

export default useRides;
