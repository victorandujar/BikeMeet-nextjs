import { RideStructureData } from "../Ride/types";
import Ride from "../Ride/Ride";
import RidesListStyled from "./RidesListStyled";

interface RidesListProps {
  rides: RideStructureData[];
}

const RidesList = ({ rides }: RidesListProps): React.ReactElement => {
  return (
    <RidesListStyled>
      {rides.map((ride) => (
        <li key={ride.id} className="list__item">
          <Ride ride={ride} />
        </li>
      ))}
    </RidesListStyled>
  );
};

export default RidesList;
