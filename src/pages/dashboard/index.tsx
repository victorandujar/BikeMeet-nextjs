import { NextPage } from "next";
import RidesList from "@/components/RidesList/RidesList";
import useRides from "@/hooks/useRides/useRides";
import { useQuery } from "react-query";
import { getRidesApiResponse } from "@/api/types";

const Dashboard: NextPage = (): JSX.Element => {
  const { getRides } = useRides();

  const result = useQuery("rides", getRides);

  return (
    <>
      {!result.isLoading && (
        <RidesList rides={(result.data! as getRidesApiResponse).rides} />
      )}
    </>
  );
};

export default Dashboard;
