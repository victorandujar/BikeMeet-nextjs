import * as React from "react";
import Link from "next/link";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Paper } from "@mui/material";
import BottomNavBarStyled from "./BottomNavbarStyled";

const BottomNavbar = (): React.ReactElement => {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavBarStyled>
      <Paper sx={{ width: "100%" }} elevation={8}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className="bottom-navigation"
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            LinkComponent={Link}
            href="/dashboard"
            className="bottom-navigation__icon"
          />
          <BottomNavigationAction
            label="Nearby"
            icon={<LocationOnIcon />}
            LinkComponent={Link}
            className="bottom-navigation__icon"
          />
          <BottomNavigationAction
            label="Create"
            icon={<AddCircleIcon />}
            href="/new-ride"
            className="bottom-navigation__icon"
          />
          <BottomNavigationAction
            label="Favourites"
            icon={<FavoriteIcon />}
            LinkComponent={Link}
            className="bottom-navigation__icon"
          />
        </BottomNavigation>
      </Paper>
    </BottomNavBarStyled>
  );
};

export default BottomNavbar;
