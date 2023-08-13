import { RiderProfileStructure } from "../ProfileCard/types";

export enum DifficultyOption {
  Easy = "Easy",
  Intermediate = "Intermediate",
  Hard = "Hard",
  Begginer = "Beginner",
}

export enum SurfaceTypeOptions {
  Gravel = "Gravel",
  Road = "Road",
  MTB = "Mountain",
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
  elevationGain: number;
}
