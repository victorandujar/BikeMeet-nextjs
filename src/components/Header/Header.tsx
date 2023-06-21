import { useAppSelector } from "@/store/hooks";
import { useSession } from "next-auth/react";
import { secondaryFont } from "@/utils/fonts/fonts";
import TopNavbar from "../TopNavbar/TopNavbar";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  const { isLogged } = useAppSelector((state) => state.user);

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
      {(isLogged || isAuthenticated) && (
        <div className="navbar">
          <TopNavbar />
        </div>
      )}
    </HeaderStyled>
  );
};

export default Header;
