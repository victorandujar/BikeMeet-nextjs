import Link from "next/link";
import TopNavbarStyled from "./TopNavbarStyled";
import { quaternaryFont } from "@/utils/fonts/fonts";

const TopNavbar = (): React.ReactElement => {
  return (
    <TopNavbarStyled>
      <ul className={`navigation ${quaternaryFont.className}`}>
        <li>
          <Link href={"/dashboard"} className="navigation__link">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/nearby"} className="navigation__link">
            Nearby
          </Link>
        </li>
        <li>
          <Link href={"/create"} className="navigation__link">
            Create
          </Link>
        </li>
        <li>
          <Link href={"/favourites"} className="navigation__link">
            Favourites
          </Link>
        </li>
      </ul>
    </TopNavbarStyled>
  );
};

export default TopNavbar;
