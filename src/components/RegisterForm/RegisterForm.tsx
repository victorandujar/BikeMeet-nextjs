import Image from "next/image";
import registerImage from "../../../public/image/registerImage.jpg";
import { secondaryFont, primaryFont } from "@/utils/fonts/fonts";
import RegisterFormStyled from "./RegisterFormStyled";
import Link from "next/link";

const RegisterForm = (): JSX.Element => {
  return (
    <RegisterFormStyled
      className={`register-interface ${primaryFont.className} `}
    >
      <div className="register-interface__left-block">
        <Image
          src={registerImage}
          alt="Biker in a sunset"
          className="register-interface__picture"
        />
        <h2 className={`register-interface__title ${secondaryFont.className}`}>
          BikeMeet
        </h2>
        <span className="register-interface__slogan">Never ride alone</span>
      </div>
      <form className="register-form">
        <div className="register-form__in-row">
          <div className="mb-3 row-2">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="form-control field-names"
            />
          </div>
          <div className="mb-3 row-2">
            <label htmlFor="surname" className="form-label">
              Surname
            </label>
            <input
              type="text"
              placeholder="Enter your surname"
              className="form-control field-names"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            placeholder="Create a username"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email adress
          </label>
          <input
            type="text"
            placeholder="Enter a valid email"
            className="form-control"
          />
        </div>
        <div className="register-form__in-row">
          <div className="mb-3 row-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              placeholder="Password. 10 characters"
              className="form-control"
            />
          </div>
          <div className="mb-3 row-2">
            <label htmlFor="repeat" className="form-label">
              Repeat password
            </label>
            <input
              type="text"
              placeholder="Repeat password"
              className="form-control"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" disabled={false}>
          Join us!
        </button>
        <div className="register-interface__login login">
          <span className="login__text">Already a member?</span>
          <Link href="/login" className="login__link">
            Log in
          </Link>
        </div>
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
