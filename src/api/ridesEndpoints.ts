export interface RidesEndpointsStructure {
  rides: string;
  getAllRides: string;
  createNewRide: string;
}

export const ridesEndpoints: RidesEndpointsStructure = {
  rides: "/rides",
  getAllRides: "/",
  createNewRide: "/create",
};
