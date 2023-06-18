import { RiderProfileStructure } from "@/store/features/usersSlice/types/types";

export enum DifficultyOption {
  Easy = "easy",
  Intermediate = "intermediate",
  Hard = "hard",
  Expert = "expert",
}

export enum SurfaceTypeOptions {
  Gravel = "gravel",
  Road = "road",
  MTB = "mountain",
}

export interface RideStructureData {
  title: string;
  location: string;
  date: string | Date;
  surfaceType: SurfaceTypeOptions;
  distance: string;
  difficulty: DifficultyOption;
  pace: number;
  description: string;
  ridersJoined: string[];
  ridersLimit: number;
  image: string;
  owner: RiderProfileStructure;
  id: string;
}
