import React, { useState } from "react";
import { StandaloneSearchBox, LoadScriptNext } from "@react-google-maps/api";
import TextField from "@mui/material/TextField";

interface PlacesLocationProps {
  onLoad: (ref: any) => any;
  location: string;
  setLocation: (event: any) => void;
  handlePlaceChanged: () => void;
}

const PlacesLocation = ({
  onLoad,
  location,
  setLocation,
  handlePlaceChanged,
}: PlacesLocationProps): React.ReactElement => {
  return (
    <LoadScriptNext
      googleMapsApiKey={process.env.NEXT_PUBLIC_LOCATION_KEY!}
      libraries={["places"]}
    >
      <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={handlePlaceChanged}>
        <TextField
          type="text"
          placeholder="Where is the meeting"
          className="location__field"
          label="Where to start?"
          sx={{
            "& > :not(style)": { width: "400px" },
          }}
          value={location}
          onChange={setLocation}
        />
      </StandaloneSearchBox>
    </LoadScriptNext>
  );
};

export default PlacesLocation;
