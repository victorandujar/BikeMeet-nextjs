import Image from "next/image";
import loginImage from "../../../public/image/loginImage.jpg";
import LoginFormStyled from "./LoginFormStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faStrava } from "@fortawesome/free-brands-svg-icons";
import useUser from "@/hooks/useUser/useUser";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";

import { secondaryFont, primaryFont } from "@/utils/fonts/fonts";
import Link from "next/link";
import { CircularProgress } from "@mui/material";
import { AxiosError } from "axios";
import {
  errorsCodeStatus,
  errorsMessages,
} from "@/utils/userFeedback/errorsManager";
import { useRouter } from "next/navigation";
import { rideEndpoints, userEndpoints } from "@/utils/endpoints/endpoints";

const LoginForm = (): React.ReactElement => {
  const { loginUser, checkUserIsVerified } = useUser();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemembered, setIsRemembered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserVerified, setIsVerified] = useState(true);
  const [isError, setIsError] = useState("");

  const handleEmail = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(value);
    setIsError("");
  };

  const handlePassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
    setIsError("");
  };

  const toogleRememberUser = () => {
    !isRemembered ? setIsRemembered(true) : setIsRemembered(false);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsError("");
    setIsLoading(true);

    try {
      const { isUserVerified } = await checkUserIsVerified({
        email,
      });

      setIsVerified(isUserVerified.isVerified);

      if (!isUserVerified.isVerified) {
        throw new Error();
      }

      await loginUser({ email, password }, isRemembered);

      setIsLoading(false);
    } catch (error) {
      const { response, message } = error as AxiosError;

      if (
        response?.status === errorsCodeStatus.notFound ||
        response?.status === errorsCodeStatus.wrongCredentials
      ) {
        setIsError(errorsMessages.wrongCredentials);
      }

      if (message === errorsMessages.networkFail) {
        setIsError(errorsMessages.serverError);
      }

      setIsLoading(false);
    }
  };

  const { data: session } = useSession();

  if (session) {
    router.push(`${rideEndpoints.dashboard}`);
  }

  const areInputFieldsEmpty = email === "" || password === "";
  const emailInputEmpty = email === "";

  return (
    <LoginFormStyled className={`login-interface ${primaryFont.className}`}>
      <div className="login-interface__left-block">
        <Image
          alt="Bikers"
          src={loginImage}
          width={600}
          height={500}
          className="login-interface__picture"
          priority
        />
        <h2 className={`login-interface__title ${secondaryFont.className}`}>
          BikeMeet
        </h2>
        <span className="login-interface__slogan">Never ride alone</span>
      </div>
      <form className="login-interface__form form" onSubmit={onSubmitHandler}>
        <div className="mb-3 email">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter a valid email"
            onChange={handleEmail}
            disabled={isLoading}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password. Max 10 characters"
            onChange={handlePassword}
            disabled={isLoading}
          />
        </div>
        <div className="mb-3 form-check">
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="check"
              onChange={toogleRememberUser}
            />
            <label className="form-check__label" htmlFor="check">
              Remember me
            </label>
          </div>
          <Link
            href="/recovery-email/validate-email"
            className="form-check__forgot"
          >
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-primary-accent"
          disabled={areInputFieldsEmpty || isLoading}
        >
          Log in
        </button>
        <div className="form__footer footer">
          <div className="loader__container modals-messages">
            {isLoading && <CircularProgress />}
            <div className={`${primaryFont.className}`}>
              {!isUserVerified && (
                <span
                  className="modals-messages__error"
                  hidden={isUserVerified}
                >
                  Before you Log in, you must verify your account. Check your
                  email.
                </span>
              )}
              <span
                className="modals-messages__error"
                hidden={!isError || emailInputEmpty}
              >
                {isError}
              </span>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => signIn("google")}
            disabled={isLoading}
          >
            <FontAwesomeIcon
              icon={faGoogle}
              className="footer__google"
              width={20}
            />
            Log in with Google
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => signIn("strava")}
            disabled={isLoading}
          >
            <FontAwesomeIcon
              icon={faStrava}
              className="footer__strava"
              width={15}
            />
            Login with Strava
          </button>
          <div className="login-interface__signup signup">
            <span className="signup__text">Not a member?</span>
            <Link href={`${userEndpoints.signup}`} className="signup__link">
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
