import { NextPage } from "next";
import { useQuery } from "react-query";
import RidesList from "@/components/RidesList/RidesList";
import useRides from "@/hooks/useRides/useRides";
import { getRidesApiResponse } from "@/api/types";
import { Typography } from "@mui/material";
import DashboardStyled from "./DashboardStyled";

const Dashboard: NextPage = (): JSX.Element => {
  const { getRides } = useRides();

  const result = useQuery("rides", getRides);

  if (result.isError) {
    return (
      <DashboardStyled>
        <Typography className="error-message">
          An error has occurred. Please try again later!
        </Typography>
      </DashboardStyled>
    );
  }

  return (
    <DashboardStyled>
      {!result.isLoading && (
        <RidesList rides={(result.data! as getRidesApiResponse).rides} />
      )}
    </DashboardStyled>
  );
};

export default Dashboard;
