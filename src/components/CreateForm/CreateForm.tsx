import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import CreateFormStyled from "./CreateFormStyled";
import PlacesLocation from "../PlacesLocation/PlacesLocation";
import surfaceTypes from "@/utils/surfaceTypes/surfaceTypes";
import StepperCreateForm from "../StepperCreateForm/StepperCreateForm";

const CreateForm = () => {
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [distance, setDistance] = React.useState(0);
  const [pace, setPace] = React.useState(0);
  const [elevationGain, setElevationGain] = React.useState(0);
  const [surfaceType, setSurfaceType] = React.useState("");
  const [ridersLimit, setRidersLimit] = React.useState(0);
  const [step, setStep] = React.useState(0);
  const [image, setImage] = React.useState<File | string>("");
  const [description, setDescription] = React.useState("");

  const inputRef = React.useRef();

  const handlePlaceChanged = () => {
    const selectedPlace = (inputRef.current as any).getPlaces()[0];
    if (selectedPlace) {
      setLocation(selectedPlace.formatted_address);
    }
  };

  const handleInputStringChange =
    (setState: React.Dispatch<React.SetStateAction<string>>) =>
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setState(value);
    };

  const handleInputNumberChange =
    (setState: React.Dispatch<React.SetStateAction<number>>) =>
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setState(+value);
    };

  const handleSurfaceTypeChange = (event: SelectChangeEvent) => {
    setSurfaceType(event.target.value);
  };

  const handleImage = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setImage(files?.[0]!);
  };

  const handleStepForwardForm = () => {
    if (step === 3) {
      return;
    }

    setStep(step + 1);
  };

  const handleStepBackForm = () => {
    if (step === 0) {
      return;
    }

    setStep(step - 1);
  };

  return (
    <CreateFormStyled className="create-form">
      <div className="create-form__stepper">
        <StepperCreateForm currentStep={step} />
      </div>

      <div className="form-container">
        <Box
          component="form"
          noValidate
          autoComplete="off"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={5}
          hidden={step !== 0}
          className="form-container__block"
        >
          <Typography
            variant="h4"
            borderBottom={1}
            paddingBottom={2}
            className="form-container__title"
          >
            Basic information
          </Typography>
          <InputLabel
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.2,
              fontSize: 13,
            }}
          >
            Ride name
            <TextField
              label="Name your next adventure"
              variant="outlined"
              value={name}
              name="name"
              onChange={handleInputStringChange(setName)}
              sx={{ opacity: 1 }}
              className="create-form__field"
            />
          </InputLabel>
          <InputLabel
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.2,
              fontSize: 13,
            }}
          >
            Meeting point
            <PlacesLocation
              handlePlaceChanged={handlePlaceChanged}
              location={location}
              setLocation={(event) => setLocation(event.target.value)}
              onLoad={(ref) => ((inputRef.current as any) = ref)}
              className="create-form__field"
            />
          </InputLabel>
          <InputLabel
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.2,
              fontSize: 13,
            }}
          >
            Date to ride
            <input
              type="datetime-local"
              className="create-form__custom-input"
              value={date}
              onChange={handleInputStringChange(setDate)}
            />
          </InputLabel>
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { width: "400px" },
          }}
          noValidate
          autoComplete="off"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={5}
          hidden={step !== 1}
        >
          <Typography variant="h4" borderBottom={1} paddingBottom={2}>
            Ride metrics
          </Typography>
          <InputLabel
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.2,
              fontSize: 13,
            }}
          >
            Distance
            <TextField
              id="outlined-basic"
              label="How far do you want to go?"
              variant="outlined"
              value={distance}
              name="name"
              onChange={handleInputNumberChange(setDistance)}
              sx={{ opacity: 1 }}
              className="create-form__field"
            />
          </InputLabel>
          <InputLabel
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.2,
              fontSize: 13,
            }}
          >
            Pace
            <TextField
              id="outlined-basic"
              label="Are you fast enough?"
              variant="outlined"
              value={pace}
              name="name"
              onChange={handleInputNumberChange(setPace)}
              sx={{ opacity: 1 }}
              className="create-form__field"
            />
          </InputLabel>
          <InputLabel
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.2,
              fontSize: 13,
            }}
          >
            Elevation gain
            <TextField
              id="outlined-basic"
              label="The more you climb, the more you cry"
              variant="outlined"
              value={elevationGain}
              name="name"
              onChange={handleInputNumberChange(setElevationGain)}
              sx={{ opacity: 1 }}
              className="create-form__field"
            />
          </InputLabel>
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { width: "400px" },
          }}
          noValidate
          autoComplete="off"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={5}
          hidden={step !== 2}
        >
          <Typography variant="h4" borderBottom={1} paddingBottom={2}>
            Riders, surface & image
          </Typography>
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.2,
              fontSize: 13,
            }}
          >
            Surface type
            <Select
              value={surfaceType}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleSurfaceTypeChange}
              className="create-form__field"
            >
              {surfaceTypes.map((surface) => (
                <MenuItem value={surface.type} key={surface.key}>
                  {surface.type}
                </MenuItem>
              ))}
            </Select>
          </InputLabel>
          <InputLabel
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.2,
              fontSize: 13,
            }}
          >
            Riders limit
            <TextField
              id="outlined-basic"
              label="Not too big, not too small"
              variant="outlined"
              value={ridersLimit}
              name="name"
              onChange={handleInputNumberChange(setRidersLimit)}
              sx={{ opacity: 1 }}
              className="create-form__field"
            />
          </InputLabel>
          <InputLabel
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.2,
              fontSize: 13,
            }}
          >
            Image
            <input
              type="file"
              className="create-form__custom-input"
              onChange={handleImage}
            />
          </InputLabel>
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { width: "400px" },
          }}
          noValidate
          autoComplete="off"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={7}
          hidden={step !== 3}
        >
          <Typography variant="h4" borderBottom={1} paddingBottom={2}>
            Description & submit
          </Typography>
          <InputLabel
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.2,
              fontSize: 13,
            }}
          >
            Ride description
            <TextField
              id="outlined-multiline-flexible"
              label="Feel free to say what you want"
              multiline
              maxRows={10}
              className="create-form__field"
              value={description}
              onChange={handleInputStringChange(setDescription)}
            />
          </InputLabel>
        </Box>
        <div className="create-form__buttons">
          <button
            type={step === 3 ? "submit" : "button"}
            className="btn btn-primary btn-primary-accent"
            onClick={handleStepForwardForm}
          >
            {step === 3 ? "Submit" : "Continue"}
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            disabled={step === 0}
            onClick={handleStepBackForm}
          >
            Back
          </button>
        </div>
      </div>
    </CreateFormStyled>
  );
};

export default CreateForm;
