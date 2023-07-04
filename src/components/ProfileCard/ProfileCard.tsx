import Image from "next/image";
import { UserDataStructure } from "./types";
import ProfileCardStyled from "./ProfileCardStyled";
import { primaryFont } from "@/utils/fonts/fonts";
import { useSession } from "next-auth/react";

interface ProfileCardProps {
  user: UserDataStructure;
}

const ProfileCard = ({
  user: { user },
}: ProfileCardProps): React.ReactElement => {
  const { data } = useSession();

  const sessionUser = data?.user;

  return (
    <ProfileCardStyled className={`user-profile ${primaryFont.className}`}>
      <Image
        src={user.image || sessionUser?.image!}
        alt={`${user.name}'s profile image`}
        height={100}
        width={100}
        className="user-profile__avatar"
      />
      <div className="user-profile__user user">
        <h2 className="user__name">
          {`${user.name} ${user.surname}` || `${sessionUser?.name}`}
        </h2>
        <span className="user__location">Barcelona, Spain</span>
      </div>
      <div className="user-profile__data data">
        <div className="data__row2">
          <div className="data__stats stats">
            <span className="stats__title">Rides</span>
            <span className="stats__number">{user.rides}</span>
          </div>
          <div className="data__stats stats">
            <span className="stats__title">Rate</span>
            <span className="stats__number">{user.rate}</span>
          </div>
        </div>
        <div className="data__row2">
          <div className="data__stats stats">
            <span className="stats__title">Followers</span>
            <span className="stats__number">{user.followers?.length}</span>
          </div>
          <div className="data__stats stats">
            <span className="stats__title">Following</span>
            <span className="stats__number">{user.following?.length}</span>
          </div>
        </div>
      </div>
      <div className="user-profile__next-activity next-activity">
        <div className="next-activity__information">
          <span className="next-activity__title">Next activity</span>
          <span className="next-activity__days">5 days to go</span>
        </div>
        <span className="next-activity__text">
          3 days Tabernas desert adventure
        </span>
      </div>
    </ProfileCardStyled>
  );
};

export default ProfileCard;
