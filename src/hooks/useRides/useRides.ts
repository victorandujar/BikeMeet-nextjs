import apiClient from "@/api/apiClient";
import { ridesEndpoints } from "@/api/ridesEndpoints";

interface useRidesStructure {
  getRides: () => void;
}

const { getAllRides, rides } = ridesEndpoints;

const useRides = (): useRidesStructure => {
  const getRides = async () => {
    const response = await apiClient.get(`${rides}${getAllRides}`);

    return response.data;
  };

  return { getRides };
};

export default useRides;
