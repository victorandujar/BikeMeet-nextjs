import { primaryFont } from "@/utils/fonts/fonts";
import { NextPage } from "next";
import RecoveryPasswordEmailPageStyled from "./RecoveryPasswordEmailPageStyled";
import Link from "next/link";

const RecoveryPasswordEmailPage: NextPage = (): JSX.Element => {
  return (
    <RecoveryPasswordEmailPageStyled
      className={`recovery-email ${primaryFont.className}`}
    >
      <div className="recovery-email__heading heading">
        <h2 className="heading__title">Recovery email confirmation</h2>
        <span className="heading__text">
          Enter a valid email to check if it exists in our data base, so we can
          send you the recovery password email!
        </span>
      </div>
      <form className="recovery-email__form">
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter an email"
        />
        <Link
          href="/recovery-email/email-confirmation"
          type="submit"
          className="btn btn-primary btn-primary-accent"
        >
          Send recovery email
        </Link>
      </form>
    </RecoveryPasswordEmailPageStyled>
  );
};

export default RecoveryPasswordEmailPage;
