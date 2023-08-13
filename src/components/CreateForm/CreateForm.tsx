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
import useRides from "@/hooks/useRides/useRides";
import { useAppSelector } from "@/store/hooks";
import { RideFormData } from "@/hooks/useRides/types";
import { DifficultyOption, SurfaceTypeOptions } from "../Ride/types";

const CreateForm = () => {
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [distance, setDistance] = React.useState<number | string>("");
  const [pace, setPace] = React.useState<number | string>("");
  const [elevationGain, setElevationGain] = React.useState<number | string>("");
  const [surfaceType, setSurfaceType] = React.useState("");
  const [ridersLimit, setRidersLimit] = React.useState<number | string>("");
  const [step, setStep] = React.useState(0);
  const [image, setImage] = React.useState<File | string>("");
  const [description, setDescription] = React.useState("");
  const [difficulty, setDifficulty] = React.useState("");

  const { createRide } = useRides();
  const { id } = useAppSelector((state) => state.user.user);

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
    (setState: React.Dispatch<React.SetStateAction<number | string>>) =>
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      const numericValue = value !== "" ? +value : null;
      setState(numericValue!);
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

  React.useEffect(() => {
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
  }, [pace, elevationGain, distance]);

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newRide: RideFormData = {
      date,
      description,
      distance: distance?.toString()!,
      elevationGain: elevationGain?.toString()!,
      image,
      location,
      owner: id,
      pace: pace?.toString()!,
      ridersLimit: ridersLimit?.toString()!,
      surfaceType: surfaceType as SurfaceTypeOptions,
      title,
      difficulty: difficulty as DifficultyOption,
      ridersJoined: [],
    };

    try {
      await createRide(newRide);
    } catch (error) {}
  };

  return (
    <CreateFormStyled className="create-form">
      <div className="create-form__stepper">
        <StepperCreateForm currentStep={step} />
      </div>

      <form className="form-container" onSubmit={onSubmitHandler}>
        <Box
          component="div"
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
              value={title}
              name="name"
              onChange={handleInputStringChange(setTitle)}
              sx={{ opacity: 1 }}
              className="create-form__field"
              aria-label="Ride title"
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
              label="Where to start?"
              ariaLabel="Starting loctation"
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
              name="date"
              aria-label="Date to ride"
            />
          </InputLabel>
        </Box>
        <Box
          component="div"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={5}
          hidden={step !== 1}
          className="form-container__block"
        >
          <Typography
            variant="h4"
            borderBottom={1}
            paddingBottom={2}
            className="form-container__title"
          >
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
            Distance (km)
            <TextField
              id="outlined-basic"
              label="How far do you want to go?"
              variant="outlined"
              value={distance}
              name="distance"
              onChange={handleInputNumberChange(setDistance)}
              sx={{ opacity: 1 }}
              className="create-form__field"
              type="number"
              aria-label="Distance field"
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
            Pace (km/h)
            <TextField
              id="outlined-basic"
              label="Are you fast enough?"
              variant="outlined"
              value={pace}
              name="pace"
              onChange={handleInputNumberChange(setPace)}
              sx={{ opacity: 1 }}
              className="create-form__field"
              type="number"
              aria-label="Pace field"
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
            Elevation gain (m)
            <TextField
              id="outlined-basic"
              label="The more you climb, the more you cry"
              variant="outlined"
              value={elevationGain}
              name="Elevation gain"
              onChange={handleInputNumberChange(setElevationGain)}
              sx={{ opacity: 1 }}
              className="create-form__field"
              type="number"
              aria-label="Elevation gain field"
            />
          </InputLabel>
        </Box>
        <Box
          component="div"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={5}
          hidden={step !== 2}
          className="form-container__block"
        >
          <Typography
            variant="h4"
            borderBottom={1}
            paddingBottom={2}
            className="form-container__title"
          >
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
              aria-label="Surface type select"
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
              name="Riders limit"
              onChange={handleInputNumberChange(setRidersLimit)}
              sx={{ opacity: 1 }}
              className="create-form__field"
              type="number"
              aria-label="Riders limit field"
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
              name="image"
              aria-label="Image ride upload"
            />
          </InputLabel>
        </Box>
        <Box
          component="div"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={7}
          hidden={step !== 3}
          className="form-container__block"
        >
          <Typography
            variant="h4"
            borderBottom={1}
            paddingBottom={2}
            className="form-container__title"
          >
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
              name="Ride description"
              aria-label="Ride description field"
            />
          </InputLabel>
        </Box>
        <div className="create-form__buttons">
          <button
            type={"submit"}
            className="btn btn-primary btn-primary-accent"
            onClick={handleStepForwardForm}
            hidden={step !== 3}
          >
            Submit
          </button>
          <button
            type={"button"}
            className="btn btn-primary btn-primary-accent"
            onClick={handleStepForwardForm}
            hidden={step === 3}
          >
            Continue
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
      </form>
    </CreateFormStyled>
  );
};

export default CreateForm;
