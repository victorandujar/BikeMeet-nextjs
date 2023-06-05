import Image from "next/image";
import loginImage from "../../../public/image/loginImage.jpg";
import LoginFormStyled from "./LoginFormStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faStrava } from "@fortawesome/free-brands-svg-icons";
import useUser from "@/hooks/useUser/useUser";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import GoogleWelcomePage from "../AuthWelcomePage/AuthWelcomePage";
import { secondaryFont, primaryFont } from "@/utils/fonts/fonts";
import Link from "next/link";
import { CircularProgress } from "@mui/material";
import { AxiosError } from "axios";
import { errorsCodeStatus } from "@/utils/errorsCodeStatus/errorsCodeStatus";

const LoginForm = (): JSX.Element => {
  const { loginUser, checkUserIsVerified } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemembered, setIsRemembered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserVerified, setIsVerified] = useState(true);
  const [isEmailIncorrect, setIsEmail] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const handleEmail = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(value);
  };

  const handlePassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
  };

  const toogleRememberUser = () => {
    !isRemembered ? setIsRemembered(true) : setIsRemembered(false);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
      const { response } = error as AxiosError;
      const checkEmailError = response?.status === errorsCodeStatus.notFound;
      const checkWrongCredentialsError =
        response?.status === errorsCodeStatus.wrongCredentials;

      setIsLoading(false);

      setIsEmail(checkEmailError);
      setWrongCredentials(checkWrongCredentialsError);
    }
  };

  const { data: session } = useSession();

  if (session) {
    return <GoogleWelcomePage session={session} />;
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
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={toogleRememberUser}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-primary-accent"
          disabled={areInputFieldsEmpty}
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
                  Before you Log in, you must verify your account. Chek your
                  email.
                </span>
              )}
              {isEmailIncorrect && (
                <span
                  className="modals-messages__error"
                  hidden={!isEmailIncorrect || emailInputEmpty}
                >
                  The email you are trying to Log in does not exists.
                </span>
              )}
              {wrongCredentials && (
                <span
                  className="modals-messages__error"
                  hidden={!wrongCredentials || emailInputEmpty}
                >
                  Wrong credentials.
                </span>
              )}
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => signIn("google")}
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
            <Link href="/sign-up" className="signup__link">
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
