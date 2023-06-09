import { primaryFont } from "@/utils/fonts/fonts";
import { NextPage } from "next";
import RecoveryPasswordEmailPageStyled from "./RecoveryPasswordEmailPageStyled";
import useUser from "@/hooks/useUser/useUser";
import { useState } from "react";
import { AxiosError } from "axios";
import {
  errorsCodeStatus,
  errorsMessages,
} from "@/utils/userFeedback/errorsManager";
import {
  successManagerMessages,
  sucessManagerStatusCodes,
} from "@/utils/userFeedback/successManager";
import { CircularProgress } from "@mui/material";

const RecoveryPasswordEmailPage: NextPage = (): JSX.Element => {
  const { checkUserEmail } = useUser();

  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState("");
  const [isSuccess, setIsSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmail = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(value);
    setIsError("");
    setIsSuccess("");
  };
  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsError("");
    setIsSuccess("");

    setIsLoading(true);

    try {
      const { response } = await checkUserEmail({ email: email });

      setIsLoading(false);
      if (response.status === sucessManagerStatusCodes.found) {
        setIsSuccess(`${successManagerMessages.emailSent} ${email}`);
      }
    } catch (error) {
      setIsLoading(false);
      const { response, message } = error as AxiosError;

      if (response?.status === errorsCodeStatus.notFound) {
        setIsError(errorsMessages.notFoundEmail);
      }

      if (message === errorsMessages.networkFail) {
        setIsError(errorsMessages.serverError);
      }
    }
  };

  const isEmailInputEmpty = email === "";

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
      <form className="recovery-email__form" onSubmit={onSubmitHandler}>
        <input
          type="email"
          className="form-control"
          placeholder="Enter an email"
          onChange={handleEmail}
          disabled={isLoading}
        />
        <button
          type="submit"
          className="btn btn-primary btn-primary-accent"
          disabled={isEmailInputEmpty || isLoading}
        >
          Send recovery email
        </button>
        <div className="loader__container modals-messages">
          {isLoading && <CircularProgress />}
          <span
            className="modals-messages__error"
            hidden={!isError || isEmailInputEmpty}
          >
            {isError}
          </span>
          <span
            className="modals-messages__success"
            hidden={!isSuccess || isEmailInputEmpty}
          >
            {isSuccess}
          </span>
        </div>
      </form>
    </RecoveryPasswordEmailPageStyled>
  );
};

export default RecoveryPasswordEmailPage;
