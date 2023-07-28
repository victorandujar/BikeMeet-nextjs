import { useSession } from "next-auth/react";
import { secondaryFont } from "@/utils/fonts/fonts";
import TopNavbar from "../TopNavbar/TopNavbar";
import HeaderStyled from "./HeaderStyled";
import endpoints from "@/utils/endpoints/endpoints";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Header = (): React.ReactElement => {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  const [searchClick, setSearchClick] = useState(false);

  const handleClik = () => {
    setSearchClick(!searchClick);
  };

  return (
    <HeaderStyled className="header-page">
      <div className="header-page__user-actions">
        <div className={`header-page__logo`}>
          <Link href={endpoints.dashboard}>
            <div className={`header-page__title title`}>
              <h2 className={`title__black ${secondaryFont.className}`}>
                Bike
              </h2>
              <h2 className={`title__blue ${secondaryFont.className}`}>Meet</h2>
            </div>
          </Link>
        </div>
        {isAuthenticated && (
          <div className="header-page__interactive">
            <div className="header-page__search">
              <button
                type="button"
                onClick={handleClik}
                className="header-page__searchButton"
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="arrow"
                  width={20}
                />
              </button>
              {searchClick && <SearchBar />}
            </div>
            <div className="header-page__icons" hidden={searchClick}>
              <NotificationsNoneIcon className="icon" />
              <ForumIcon className="icon" />
            </div>
          </div>
        )}
      </div>
      <div className="header-page__navigation">
        {isAuthenticated && <TopNavbar />}
      </div>
    </HeaderStyled>
  );
};

export default Header;
