import apiClient from "@/api/apiClient";
import { ridesEndpoints } from "@/api/ridesEndpoints";

interface UseRidesStructure {
  getRides: () => {};
}

const { getAllRides, rides } = ridesEndpoints;

const useRides = (): UseRidesStructure => {
  const getRides = async () => {
    const response = await apiClient.get(`${rides}${getAllRides}`);

    return response.data;
  };

  return { getRides };
};

export default useRides;
