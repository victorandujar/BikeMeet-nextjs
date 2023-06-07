import { primaryFont } from "@/utils/fonts/fonts";
import { NextPage } from "next";
import RestorePasswordPageStyled from "./RestorePasswordStyled";

const RestorePasswordPage: NextPage = (): JSX.Element => {
  return (
    <RestorePasswordPageStyled
      className={`restore-password ${primaryFont.className}`}
    >
      <div className="restore-password__heading heading">
        <h2 className="heading__title">Restore password</h2>
        <span className="heading__text">
          Enter your new account password in the fields below!
        </span>
      </div>
      <form className="restore-password__form">
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="repeat" className="form-label">
            Repeat password
          </label>
          <input type="password" className="form-control" id="repeat" />
        </div>
        <button type="submit" className="btn btn-primary btn-primary-accent">
          Reset password
        </button>
      </form>
      <button type="button" className="btn btn-outline-dark">
        Back to Log in
      </button>
    </RestorePasswordPageStyled>
  );
};

export default RestorePasswordPage;
