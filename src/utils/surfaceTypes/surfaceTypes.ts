import { SurfaceTypeOptions } from "@/components/Ride/types";

interface SurfaceTypesStructure {
  type: string;
  key: number;
}

const surfaceTypes: SurfaceTypesStructure[] = [
  { type: SurfaceTypeOptions.Gravel, key: 1 },
  { type: SurfaceTypeOptions.Road, key: 2 },
  { type: SurfaceTypeOptions.MTB, key: 3 },
];

export default surfaceTypes;
