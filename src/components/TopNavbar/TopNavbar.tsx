import Link from "next/link";
import TopNavbarStyled from "./TopNavbarStyled";
import { quaternaryFont, tertyaryFont } from "@/utils/fonts/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const TopNavbar = (): React.ReactElement => {
  return (
    <TopNavbarStyled>
      <ul className={`navigation ${tertyaryFont.className}`}>
        <li>
          <Link href={"/nearby"} className="navigation__link">
            Explore
            <FontAwesomeIcon icon={faAngleDown} className="arrow" width={20} />
          </Link>
        </li>
        <li>
          <Link href={"/create"} className="navigation__link">
            New ride
          </Link>
        </li>
        <li>
          <Link href={"/favourites"} className="navigation__link">
            Rides to go
          </Link>
        </li>
      </ul>
    </TopNavbarStyled>
  );
};

export default TopNavbar;
