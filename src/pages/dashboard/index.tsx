import { NextPage } from "next";
import { useQuery } from "react-query";
import RidesList from "@/components/RidesList/RidesList";
import useRides from "@/hooks/useRides/useRides";
import { GetRidesApiResponse } from "@/api/types";
import { Skeleton, Typography } from "@mui/material";
import DashboardStyled from "./DashboardStyled";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import useUser from "@/hooks/useUser/useUser";
import { UserDataStructure } from "@/components/ProfileCard/types";
import { useAppSelector } from "@/store/hooks";

const Dashboard: NextPage = (): React.ReactElement => {
  const { getRides } = useRides();
  const { getUser } = useUser();

  const { email } = useAppSelector((state) => state.user);

  const rides = useQuery("rides", getRides);
  const user = useQuery("user", () => getUser({ email }), {
    enabled: Boolean(email),
  });

  if (rides.isLoading) {
    return (
      <DashboardStyled>
        <div className="skeleton">
          <Skeleton
            variant="rounded"
            animation="wave"
            className="skeleton__item"
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            className="skeleton__item"
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            className="skeleton__item"
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            className="skeleton__item"
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            className="skeleton__item"
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            className="skeleton__item"
          />
        </div>
      </DashboardStyled>
    );
  }

  if (rides.isError) {
    return (
      <DashboardStyled>
        <Typography className="error-message">
          An error has occurred. Please try again later!
        </Typography>
      </DashboardStyled>
    );
  }

  return (
    <DashboardStyled className="dashboard-page">
      <div>
        {!user.isLoading && (
          <ProfileCard user={user.data as UserDataStructure} />
        )}
      </div>
      <div className="dashboard-page__rides">
        {!rides.isLoading && (
          <RidesList rides={(rides.data! as GetRidesApiResponse).rides} />
        )}
      </div>
    </DashboardStyled>
  );
};

export default Dashboard;
