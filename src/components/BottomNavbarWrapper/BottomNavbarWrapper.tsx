import { useRouter } from "next/router";
import BottomNavbar from "../BottomNavbar/BottomNavbar";
import BottomNavbarWrapperStyled from "./BottomNavbarWrapperStyled";
import userEndpoints from "@/utils/userEndpoints/userEndpoints";

const BottomNavbarWrapper = (): JSX.Element => {
  const route = useRouter();
  if (
    route.pathname === userEndpoints.login ||
    route.pathname === userEndpoints.signup
  ) {
    return <></>;
  }

  return (
    <BottomNavbarWrapperStyled>
      <BottomNavbar />
    </BottomNavbarWrapperStyled>
  );
};

export default BottomNavbarWrapper;
