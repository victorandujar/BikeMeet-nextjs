import { RideFormData } from "@/hooks/useRides/types";

const createFormData = (ride: RideFormData) => {
  const data = new FormData();
  data.append("title", ride.title);
  data.append("location", ride.location);
  data.append("date", ride.date);
  data.append("surfaceType", ride.surfaceType);
  data.append("distance", ride.distance);
  data.append("difficulty", ride.difficulty);
  data.append("pace", ride.pace);
  data.append("ridersLimit", ride.ridersLimit);
  data.append("elevationGain", ride.elevationGain);
  data.append("description", ride.description);
  data.append("owner", ride.owner);
  data.append("image", ride.image);

  return data;
};

export default createFormData;
