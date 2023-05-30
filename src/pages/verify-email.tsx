import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { primaryFont, secondaryFont } from "@/utils/fonts/fonts";
import VerifyEmailStyled from "@/styles/pages/VerifyEmailStyled";
import useUser from "@/hooks/useUser/useUser";
import { useAppSelector } from "@/store/hooks";
import { useEffect } from "react";

const VerifyEmailPage = (): JSX.Element => {
  const { verifyEmail } = useUser();
  const { confirmationCode } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (confirmationCode) {
      verifyEmail({ confirmationCode });
    }
  }, [confirmationCode, verifyEmail]);

  return (
    <VerifyEmailStyled className="verify-page">
      <span className={`verify-page__success ${primaryFont.className}`}>
        The email has been verified!
      </span>
      <FontAwesomeIcon
        icon={faCircleCheck}
        className="verify-page__check-icon"
        width={50}
        height={50}
      />
      <div className="verify-page__welcome welcome">
        <span className={`welcome__text ${primaryFont.className}`}>
          Welcome to{" "}
        </span>
        <span className={`welcome__name-black ${secondaryFont.className}`}>
          Bike
        </span>
        <span className={`welcome__name-blue ${secondaryFont.className}`}>
          Meet
        </span>
      </div>
      <button className="verify-page__login">
        <Link href={"/login"} className={`${primaryFont.className}`}>
          Log in
        </Link>
      </button>
    </VerifyEmailStyled>
  );
};

export default VerifyEmailPage;
