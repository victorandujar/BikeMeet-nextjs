import Link from "next/link";
import TopNavbarStyled from "./TopNavbarStyled";
import { tertyaryFont } from "@/utils/fonts/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ProfileDropDownNavbar from "../ProfileDropDownNavbar/ProfileDropDownNavbar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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
          <Link href={"/favourites"} className="navigation__link">
            Rides to go
          </Link>
        </li>
        <ProfileDropDownNavbar />
        <li>
          <Link href={"/create"} className="navigation__link new-ride">
            <AddCircleOutlineIcon className="new-ride__icon" />
            New ride
          </Link>
        </li>
      </ul>
    </TopNavbarStyled>
  );
};

export default TopNavbar;
