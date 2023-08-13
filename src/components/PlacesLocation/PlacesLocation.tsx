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
  label: string;
  ariaLabel: string;
}

const PlacesLocation = ({
  onLoad,
  location,
  setLocation,
  handlePlaceChanged,
  className,
  label,
  ariaLabel,
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
          label={label}
          value={location}
          onChange={setLocation}
          aria-label={ariaLabel}
        />
      </StandaloneSearchBox>
    </LoadScriptNext>
  );
};

export default PlacesLocation;
