import CreateForm from "@/components/CreateForm/CreateForm";
import { NextPage } from "next";
import NewRideStyled from "./NewRideStyled";

const NewRide: NextPage = (): React.ReactElement => {
  return (
    <NewRideStyled className="create-page">
      <CreateForm />
    </NewRideStyled>
  );
};

export default NewRide;
