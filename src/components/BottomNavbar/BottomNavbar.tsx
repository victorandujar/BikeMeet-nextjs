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

const BottomNavbar = (): React.ReactElement => {
  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ width: "100%" }} elevation={8}>
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
          href="/dashboard"
        />
        <BottomNavigationAction
          label="Nearby"
          icon={<LocationOnIcon />}
          LinkComponent={Link}
        />
        <BottomNavigationAction label="Create" icon={<AddCircleIcon />} />
        <BottomNavigationAction
          label="Favourites"
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
