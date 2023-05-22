import Image from "next/image";
import loginImage from "../../../public/image/loginImage.jpg";
import LoginFormStyled from "./LoginFormStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faStrava } from "@fortawesome/free-brands-svg-icons";
import { Poppins, Odibee_Sans } from "next/font/google";
import useUser from "@/hooks/useUser/useUser";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import GoogleWelcomePage from "../AuthWelcomePage/AuthWelcomePage";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const obidee = Odibee_Sans({ subsets: ["latin"], weight: "400" });

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemembered, setIsRemembered] = useState(false);

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

    await loginUser({ email, password }, isRemembered);
  };

  const { data: session } = useSession();

  if (session) {
    return <GoogleWelcomePage session={session} />;
  }

  const areInputFieldsEmpty = email === "" || password === "";

  return (
    <LoginFormStyled className={`login-interface ${poppins.className}`}>
      <div className="login-interface__left-block">
        <Image
          alt="Bikers"
          src={loginImage}
          width={600}
          height={500}
          className="login-interface__picture"
          priority
        />
        <h2 className={`login-interface__title ${obidee.className}`}>
          BikeMeet
        </h2>
        <span className="login-interface__slogan">Never ride alone</span>
      </div>
      <form className="login-interface__form form" onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter a valid email"
            onChange={handleEmail}
          />
          {areInputFieldsEmpty ? (
            ""
          ) : (
            <span id="emailHelp" className="form__text" hidden={false}>
              We will never share your email with anyone else.
            </span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password. Max 8 characters"
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
          className="btn btn-primary"
          disabled={areInputFieldsEmpty}
        >
          Log in
        </button>
        <div className="form__footer footer">
          <span>OR</span>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => signIn()}
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
            onClick={() => signIn()}
          >
            <FontAwesomeIcon
              icon={faStrava}
              className="footer__strava"
              width={15}
            />
            Login with Strava
          </button>
          <div className="login-interface__signup signup">
            <span className="signup__text">Already a member?</span>
            <a href="/signup" className="signup__link">
              Sign up
            </a>
          </div>
        </div>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
