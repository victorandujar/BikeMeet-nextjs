import TopNavbar from "../TopNavbar/TopNavbar";
import HeaderStyled from "./HeaderStyled";
import { secondaryFont } from "@/utils/fonts/fonts";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header-page">
      <div className={`header-page__logo`}>
        <div className={`header-page__title title`}>
          <h2 className={`title__black ${secondaryFont.className}`}>Bike</h2>
          <h2 className={`title__blue ${secondaryFont.className}`}>Meet</h2>
        </div>
      </div>
      <div className="navbar">
        <TopNavbar />
      </div>
    </HeaderStyled>
  );
};

export default Header;
