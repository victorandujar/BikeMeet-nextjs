import React from "react";
import { StandaloneSearchBox, LoadScriptNext } from "@react-google-maps/api";
import TextField from "@mui/material/TextField";
import libraries from "@/utils/googleLibraries/googleLibraries";

interface PlacesLocationProps {
  onLoad: (ref: any) => any;
  location: string;
  setLocation: (event: any) => void;
  handlePlaceChanged: () => void;
  className: string;
}

const PlacesLocation = ({
  onLoad,
  location,
  setLocation,
  handlePlaceChanged,
  className,
}: PlacesLocationProps): React.ReactElement => {
  return (
    <LoadScriptNext
      googleMapsApiKey={process.env.NEXT_PUBLIC_LOCATION_KEY!}
      libraries={libraries}
    >
      <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={handlePlaceChanged}>
        <TextField
          type="text"
          placeholder="Where is the meeting"
          className={className}
          label="Where to start?"
          value={location}
          onChange={setLocation}
        />
      </StandaloneSearchBox>
    </LoadScriptNext>
  );
};

export default PlacesLocation;
