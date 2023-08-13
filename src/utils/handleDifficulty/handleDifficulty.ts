import { DifficultyOption } from "@/components/Ride/types";

interface handleDifficultyProps {
  pace: string;
  elevationGain: string;
  distance: string;
  setDifficulty: (DifficultyOption: DifficultyOption) => void;
}

const handleDifficulty = ({
  pace,
  elevationGain,
  distance,
  setDifficulty,
}: handleDifficultyProps) => {
  if (+pace < 15 || +elevationGain < 500 || +distance < 30) {
    setDifficulty(DifficultyOption.Begginner);
  }
  if (
    (+pace < 20 && +pace > 15) ||
    (+elevationGain < 1000 && +elevationGain > 500) ||
    (+distance < 50 && +distance > 30)
  ) {
    setDifficulty(DifficultyOption.Easy);
  }
  if (
    (+pace < 25 && +pace > 20) ||
    (+elevationGain < 1500 && +elevationGain > 1000) ||
    (+distance < 100 && +distance > 50)
  ) {
    setDifficulty(DifficultyOption.Intermediate);
  }
  if (+pace > 25 || +elevationGain > 1500 || +distance > 100) {
    setDifficulty(DifficultyOption.Hard);
  }
};

export default handleDifficulty;
