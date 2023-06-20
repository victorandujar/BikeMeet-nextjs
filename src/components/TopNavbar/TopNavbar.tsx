import Link from "next/link";
import TopNavbarStyled from "./TopNavbarStyled";
import { primaryFont } from "@/utils/fonts/fonts";

const TopNavbar = (): JSX.Element => {
  return (
    <TopNavbarStyled>
      <ul className={`navigation ${primaryFont.className}`}>
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
        <li>
          <Link href={"/profile"} className="navigation__link">
            Profile
          </Link>
        </li>
      </ul>
    </TopNavbarStyled>
  );
};

export default TopNavbar;
