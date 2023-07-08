import BottomNavbar from "../BottomNavbar/BottomNavbar";
import BottomNavbarWrapperStyled from "./BottomNavbarWrapperStyled";
import { useAppSelector } from "@/store/hooks";
import { useSession } from "next-auth/react";

const BottomNavbarWrapper = (): React.ReactElement => {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  if (!isAuthenticated) {
    return <></>;
  }

  return (
    <BottomNavbarWrapperStyled>
      <BottomNavbar />
    </BottomNavbarWrapperStyled>
  );
};

export default BottomNavbarWrapper;
