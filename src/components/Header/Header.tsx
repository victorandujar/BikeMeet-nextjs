import { useAppSelector } from "@/store/hooks";
import { useSession } from "next-auth/react";
import { secondaryFont } from "@/utils/fonts/fonts";
import TopNavbar from "../TopNavbar/TopNavbar";
import HeaderStyled from "./HeaderStyled";
import Button from "../Button/Button";
import useUser from "@/hooks/useUser/useUser";

const Header = (): React.ReactElement => {
  const { isLogged } = useAppSelector((state) => state.user);
  const { logoutUser } = useUser();

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
        {(isLogged || isAuthenticated) && (
          <div className="navbar">
            <TopNavbar />
          </div>
        )}
        {(isLogged || isAuthenticated) && (
          <Button
            text="Log out"
            actionOnClick={logoutUser}
            isDisabled={false}
          />
        )}
      </div>
    </HeaderStyled>
  );
};

export default Header;
