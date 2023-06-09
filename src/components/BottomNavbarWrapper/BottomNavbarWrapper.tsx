import BottomNavbar from "../BottomNavbar/BottomNavbar";
import BottomNavbarWrapperStyled from "./BottomNavbarWrapperStyled";

const BottomNavbarWrapper = (): JSX.Element => {
  return (
    <BottomNavbarWrapperStyled>
      <BottomNavbar />
    </BottomNavbarWrapperStyled>
  );
};

export default BottomNavbarWrapper;
