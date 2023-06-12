import BottomNavbar from "../BottomNavbar/BottomNavbar";
import BottomNavbarWrapperStyled from "./BottomNavbarWrapperStyled";
import { useAppSelector } from "@/store/hooks";
import { useSession } from "next-auth/react";

const BottomNavbarWrapper = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  if (!isLogged && !isAuthenticated) {
    return <></>;
  }

  return (
    <BottomNavbarWrapperStyled>
      <BottomNavbar />
    </BottomNavbarWrapperStyled>
  );
};

export default BottomNavbarWrapper;
