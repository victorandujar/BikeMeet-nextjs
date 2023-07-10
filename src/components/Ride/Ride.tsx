import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Image from "next/image";
import { RideStructureData } from "./types";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import DirectionsBikeRoundedIcon from "@mui/icons-material/DirectionsBikeRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import RouteIcon from "@mui/icons-material/Route";
import RideStyled from "./RideStyled";
import PlaceIcon from "@mui/icons-material/Place";

interface RideProps {
  ride: RideStructureData;
}

const Ride = ({ ride }: RideProps): React.ReactElement => {
  const localDateFormat = ride.date.toLocaleString().split("T")[0];

  return (
    <RideStyled>
      <Card sx={{ maxWidth: 345 }} className="card">
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src={ride?.owner?.image ?? ride?.owner?.name.charAt(0)}
              className="ride__avatar"
            />
          }
          title={ride?.owner?.name}
          subheader={`${ride?.owner?.rate} / ${ride?.owner?.rides} rides`}
          className="card__header"
        />
        <div className="card__location">
          {<PlaceIcon />}
          {ride?.location}
        </div>
        <div className="card__image">
          <Image src={ride?.image} alt="bikes" height={200} width={300} />
        </div>

        <CardContent className="card__content content">
          <Typography
            variant="body1"
            color={`${(props: { theme: { colors: { mainColorText: any } } }) =>
              props.theme.colors.mainColorText}`}
            fontWeight={"bold"}
            className={` content__title`}
          >
            {ride?.title}
          </Typography>
          <div className="content content__icons">
            <Typography
              variant="body1"
              color={`${(props: {
                theme: { colors: { mainColorText: any } };
              }) => props.theme.colors.mainColorText}`}
              display={"flex"}
              className={` content__icons--first`}
            >
              <EventRoundedIcon className="content__icons-icon" />
              {localDateFormat}
            </Typography>
            <Typography
              variant="body1"
              color={`${(props: {
                theme: { colors: { mainColorText: any } };
              }) => props.theme.colors.mainColorText}`}
              display={"flex"}
              className={`content__icons--second`}
            >
              <SpeedRoundedIcon className="content__icons-icon" />
              {ride?.difficulty}
            </Typography>
            <Typography
              variant="body1"
              color={`${(props: {
                theme: { colors: { mainColorText: any } };
              }) => props.theme.colors.mainColorText}`}
              display={"flex"}
              className={`content__icons--third`}
            >
              <DirectionsBikeRoundedIcon className="content__icons-icon" />
              {ride.surfaceType}
            </Typography>
            <Typography
              variant="body1"
              color={`${(props: {
                theme: { colors: { mainColorText: any } };
              }) => props.theme.colors.mainColorText}`}
              display={"flex"}
              className={`content__icons--fourth`}
            >
              <RouteIcon className="content__icons-icon" />
              {ride?.distance} km
            </Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing className="card__footer">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <IconButton aria-label="comment this ride">
            <CommentOutlinedIcon />
          </IconButton>

          <IconButton aria-label="join the ride">
            <PersonAddAltRoundedIcon />
          </IconButton>

          <IconButton aria-label="settings and more">
            <MoreHorizRoundedIcon />
          </IconButton>
        </CardActions>
      </Card>
    </RideStyled>
  );
};

export default Ride;
