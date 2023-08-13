import { DifficultyOption, SurfaceTypeOptions } from "@/components/Ride/types";

export interface RideFormData {
  title: string;
  location: string;
  date: string;
  surfaceType: SurfaceTypeOptions;
  distance: string;
  difficulty: DifficultyOption;
  pace: string;
  description: string;
  ridersJoined: string[];
  ridersLimit: string;
  image: string | File;
  owner: string;
  elevationGain: string;
}
