import HeaderStyled from "./HeaderStyled";
import { useAppSelector } from "@/store/hooks";
import Button from "../Button/Button";
import { secondaryFont, primaryFont } from "@/utils/fonts/fonts";

const Header = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);

  return (
    <HeaderStyled className="header-page">
      <div className={`header-page__logo`}>
        <div className={`header-page__title title`}>
          <h2 className={`title__black ${secondaryFont.className}`}>Bike</h2>
          <h2 className={`title__blue ${secondaryFont.className}`}>Meet</h2>
        </div>
      </div>
      {isLogged && (
        <nav className={`navbar navbar-expand-lg ${primaryFont.className}`}>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Rides
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Create a ride
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Desired rides
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button isDisabled={false} text={"Search"} type="submit" />
              </form>
            </div>
          </div>
        </nav>
      )}
    </HeaderStyled>
  );
};

export default Header;
