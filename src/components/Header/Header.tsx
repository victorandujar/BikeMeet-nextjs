import { useSession, signOut } from "next-auth/react";
import { secondaryFont } from "@/utils/fonts/fonts";
import TopNavbar from "../TopNavbar/TopNavbar";
import HeaderStyled from "./HeaderStyled";
import Button from "../Button/Button";
import endpoints from "@/utils/endpoints/endpoints";
import ProfileDropDownNavbar from "../ProfileDropDownNavbar/ProfileDropDownNavbar";

const Header = (): React.ReactElement => {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <HeaderStyled className="header-page">
      <div className={`header-page__logo`}>
        <div className={`header-page__title title`}>
          <h2 className={`title__black ${secondaryFont.className}`}>Bike</h2>
          <h2 className={`title__blue ${secondaryFont.className}`}>Meet</h2>
        </div>
      </div>
      <div className="header-page__navigation">
        {isAuthenticated && (
          <div className="navbar">
            <TopNavbar />
            <ProfileDropDownNavbar />
          </div>
        )}
      </div>
    </HeaderStyled>
  );
};

export default Header;
