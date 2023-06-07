import { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { primaryFont, secondaryFont } from "@/utils/fonts/fonts";
import Link from "next/link";
import RecoveryEmailConfirmationStyled from "./RecoveryEmailConfirmationStyled";

const RecoveryEmailConfirmation: NextPage = (): JSX.Element => {
  return (
    <RecoveryEmailConfirmationStyled
      className={`email-sent ${primaryFont.className}`}
    >
      <h2 className={`email-sent__success ${secondaryFont.className}`}>
        Email sent!
      </h2>
      <span>
        We have sent you an email with the instructions to reset your password.
      </span>
      <FontAwesomeIcon
        icon={faCircleCheck}
        className="email-sent__check-icon"
        width={50}
        height={50}
      />
      <button className="email-sent_login">
        <Link
          href={"/login"}
          className={`${primaryFont.className} btn btn-primary btn-primary-accent`}
        >
          Back to Log in
        </Link>
      </button>
    </RecoveryEmailConfirmationStyled>
  );
};

export default RecoveryEmailConfirmation;
