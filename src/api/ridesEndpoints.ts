export interface RidesEndpointsStructure {
  rides: string;
  getAllRides: string;
}

export const ridesEndpoints: RidesEndpointsStructure = {
  rides: "/rides",
  getAllRides: "/",
};
