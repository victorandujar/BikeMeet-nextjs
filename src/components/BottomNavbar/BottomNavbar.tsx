import * as React from "react";
import Link from "next/link";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Paper } from "@mui/material";

const BottomNavbar = (): JSX.Element => {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{ maxWidth: "100%", position: "fixed", bottom: 0, left: 0 }}
      elevation={8}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          LinkComponent={Link}
        />
        <BottomNavigationAction
          label="Nearby"
          icon={<LocationOnIcon />}
          LinkComponent={Link}
        />
        <BottomNavigationAction label="Create" icon={<AddCircleIcon />} />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          LinkComponent={Link}
        />
        <BottomNavigationAction
          label="Profile"
          icon={<AccountCircleIcon />}
          LinkComponent={Link}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavbar;
