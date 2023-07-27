import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import CreateFormStyled from "./CreateFormStyled";
import PlacesLocation from "../PlacesLocation/PlacesLocation";

const CreateForm = () => {
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");

  const handleChange =
    (setState: React.Dispatch<React.SetStateAction<string>>) =>
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setState(value);
    };

  return (
    <CreateFormStyled className="create-form">
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
      >
        <Typography variant="h4" borderBottom={1} paddingBottom={2}>
          Basic information
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}
        >
          Ride name
          <TextField
            id="outlined-basic"
            label="Name your next adventure"
            variant="outlined"
            value={name}
            name="name"
            onChange={handleChange(setName)}
            sx={{ opacity: 1 }}
          />
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}
        >
          Meeting point
          <PlacesLocation />
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}
        >
          Date to ride
          <input
            type="datetime-local"
            className="create-form__date"
            value={date}
            onChange={handleChange(setDate)}
          />
        </Typography>
      </Box>
      <button type="button" className="btn btn-primary btn-primary-accent">
        Continue
      </button>
    </CreateFormStyled>
  );
};

export default CreateForm;
