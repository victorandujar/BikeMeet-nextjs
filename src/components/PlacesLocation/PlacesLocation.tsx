import React, { useState } from "react";
import { StandaloneSearchBox, LoadScriptNext } from "@react-google-maps/api";
import TextField from "@mui/material/TextField";

const PlacesLocation = (): React.ReactElement => {
  const inputRef = React.useRef();
  const [location, setLocation] = useState("");

  const handlePlaceChanged = () => {
    const selectedPlace = (inputRef.current as any).getPlaces()[0];
    if (selectedPlace) {
      setLocation(selectedPlace.formatted_address);
    }
  };

  return (
    <LoadScriptNext
      googleMapsApiKey={process.env.NEXT_PUBLIC_LOCATION_KEY!}
      libraries={["places"]}
    >
      <StandaloneSearchBox
        onLoad={(ref) => ((inputRef.current as any) = ref)}
        onPlacesChanged={handlePlaceChanged}
      >
        <TextField
          type="text"
          placeholder="Where is the meeting"
          className="location__field"
          label="Where to start?"
          sx={{
            "& > :not(style)": { width: "400px" },
          }}
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </StandaloneSearchBox>
    </LoadScriptNext>
  );
};

export default PlacesLocation;
