import Image from "next/image";
import loginImage from "../../../public/image/loginImage.jpg";
import LoginFormStyled from "./LoginFormStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faStrava } from "@fortawesome/free-brands-svg-icons";

const LoginForm = (): JSX.Element => {
  return (
    <LoginFormStyled className={`login-interface `}>
      <div className="login-interface__left-block">
        <Image
          alt="Bikers"
          src={loginImage}
          width={600}
          height={500}
          className="login-interface__picture"
          priority
        />
        <h2 className={`login-interface__title`}>BikeMeet</h2>
        <span className="login-interface__slogan">Never ride alone</span>
      </div>
      <form className="login-interface__form form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter a valid email"
          />
          <span id="emailHelp" className="form__text" hidden={false}>
            We will never share your email with anyone else.
          </span>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password. Max 8 characters"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Log in
        </button>
        <div className="form__footer footer">
          <span>OR</span>
          <button type="button" className="btn btn-primary">
            <FontAwesomeIcon
              icon={faGoogle}
              className="footer__google"
              width={20}
            />
            Log in with Google
          </button>
          <button type="button" className="btn btn-primary">
            <FontAwesomeIcon
              icon={faStrava}
              className="footer__strava"
              width={15}
            />
            Login with Strava
          </button>
        </div>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
