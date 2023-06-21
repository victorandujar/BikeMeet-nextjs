import { primaryFont } from "@/utils/fonts/fonts";
import { NextPage } from "next";
import RestorePasswordPageStyled from "./RestorePasswordStyled";
import useUser from "@/hooks/useUser/useUser";
import { useRouter as route } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import { AxiosError } from "axios";
import {
  errorsCodeStatus,
  errorsMessages,
} from "@/utils/userFeedback/errorsManager";
import { CircularProgress } from "@mui/material";
import {
  successManagerMessages,
  sucessManagerStatusCodes,
} from "@/utils/userFeedback/successManager";
import endpoints from "@/utils/endpoints/endpoints";

const RestorePasswordPage: NextPage = (): React.ReactElement => {
  const { resetUserPassword } = useUser();

  const params = useRouter();
  const path = route();

  const { userId } = params.query;

  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [isSuccess, setIsSuccess] = useState("");

  const handlePassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
    setIsError("");
    setIsSuccess("");
  };

  const handleRepeatPassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(value);
    setIsError("");
    setIsSuccess("");
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsError("");
    setIsSuccess("");

    setIsLoading(true);

    try {
      const { response } = await resetUserPassword(
        password,
        userId!.toString()
      );

      setIsLoading(false);

      if (response.status === sucessManagerStatusCodes.found) {
        setIsSuccess(successManagerMessages.passwordRestore);
      }
    } catch (error) {
      setIsLoading(false);
      const { response, message } = error as AxiosError;

      if (response?.status === errorsCodeStatus.notFound) {
        setIsError(errorsMessages.badRequestRestorPassword);
      }

      if (message === errorsMessages.networkFail) {
        setIsError(errorsMessages.serverError);
      }
    }
  };

  const arePasswordsEqual = password === repeatPassword;
  const isRepeatedPasswordEmpty = repeatPassword === "";
  const isPasswordEmpty = password === "";

  const uppercasePassword = /[A-Z]/;
  const specialCharactersPassword = /[!@#$%^&*(),.?":{}|<>_-]/;

  const hasUppercase = uppercasePassword.test(password);
  const hasSpecialCharacter = specialCharactersPassword.test(password);

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
      <form className="restore-password__form" onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter the new password"
            onChange={handlePassword}
          />
          <div className="password__messages modals-messages">
            {!hasUppercase && (
              <span className="modals-messages__check" hidden={isPasswordEmpty}>
                It must have a capital letter.
              </span>
            )}
            {!hasSpecialCharacter && (
              <span className="modals-messages__check" hidden={isPasswordEmpty}>
                It must have an special character.
              </span>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="repeat" className="form-label">
            Repeat password
          </label>
          <input
            type="password"
            className="form-control"
            id="repeat"
            placeholder="Repeat the new password"
            onChange={handleRepeatPassword}
          />
          <div className="modals-messages">
            {!arePasswordsEqual && (
              <span className="no-match" hidden={isRepeatedPasswordEmpty}>
                Passwords do not match!
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-primary-accent"
          disabled={
            !arePasswordsEqual ||
            isPasswordEmpty ||
            isRepeatedPasswordEmpty ||
            !hasUppercase ||
            !hasSpecialCharacter ||
            isLoading
          }
        >
          Reset password
        </button>
        <div className="loader__container modals-messages">
          {isLoading && <CircularProgress />}
          <span
            className="modals-messages__error"
            hidden={!isError || isPasswordEmpty}
          >
            {isError}
          </span>
          <span
            className="modals-messages__success"
            hidden={!isSuccess || isPasswordEmpty}
          >
            {isSuccess}
          </span>
        </div>
      </form>
      {isSuccess && (
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => path.push(`${endpoints.login}`)}
        >
          Back to Log in
        </button>
      )}
    </RestorePasswordPageStyled>
  );
};

export default RestorePasswordPage;
