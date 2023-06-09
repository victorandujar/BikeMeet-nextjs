import HeaderStyled from "./HeaderStyled";
import { useAppSelector } from "@/store/hooks";
import { secondaryFont } from "@/utils/fonts/fonts";
import { useSession } from "next-auth/react";

const Header = (): JSX.Element => {
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
    </HeaderStyled>
  );
};

export default Header;
