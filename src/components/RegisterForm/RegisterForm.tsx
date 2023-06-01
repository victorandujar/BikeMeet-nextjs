import Image from "next/image";
import registerImage from "../../../public/image/registerImage.jpg";
import { secondaryFont, primaryFont } from "@/utils/fonts/fonts";
import RegisterFormStyled from "./RegisterFormStyled";
import Link from "next/link";
import { useState } from "react";
import { UserRegisterCredentialsForm } from "@/hooks/useUser/types";
import useUser from "@/hooks/useUser/useUser";

const RegisterForm = (): JSX.Element => {
  const { registerUser } = useUser();

  const initialValues: UserRegisterCredentialsForm = {
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    repeat: "",
  };
  const [formData, setFormData] = useState(initialValues);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const checkPasswords = formData.password === formData.repeat;

  const isEmptyField =
    formData.name === "" ||
    formData.email === "" ||
    formData.password === "" ||
    formData.surname === "" ||
    formData.username === "";

  const uppercasePassword = /[A-Z]/;
  const specialCharactersPassword = /[!@#$%^&*(),.?":{}|<>_-]/;

  const hasUppercase = uppercasePassword.test(formData.password);
  const hasSpecialCharacter = specialCharactersPassword.test(formData.password);

  const isPasswordEmpty = formData.password === "";
  const isRepeatedPasswordEmpty = formData.repeat === "";

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await registerUser({
      name: formData.name,
      surname: formData.surname,
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <RegisterFormStyled
      className={`register-interface ${primaryFont.className} `}
    >
      <div className="register-interface__left-block">
        <Image
          src={registerImage}
          alt="Biker in a sunset"
          className="register-interface__picture"
          priority
        />
        <h2 className={`register-interface__title ${secondaryFont.className}`}>
          BikeMeet
        </h2>
        <span className="register-interface__slogan">Never ride alone</span>
      </div>
      <form className="register-form" onSubmit={onSubmitHandler}>
        <div className="register-form__in-row">
          <div className="mb-3 row-2">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="form-control field-names"
              id="name"
              name="name"
              onChange={handleInputChange}
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
              id="surname"
              name="surname"
              onChange={handleInputChange}
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
            id="username"
            name="username"
            onChange={handleInputChange}
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
            id="email"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="register-form__in-row password">
          <div className="mb-3 password__row-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Password. 10 characters"
              className="form-control"
              id="password"
              name="password"
              onChange={handleInputChange}
            />
            <div className="password__messages messages">
              {!hasUppercase && (
                <span className="messages__check" hidden={isPasswordEmpty}>
                  It must have a capital letter.
                </span>
              )}
              {!hasSpecialCharacter && (
                <span className="messages__check" hidden={isPasswordEmpty}>
                  It must have an special character.
                </span>
              )}
            </div>
          </div>
          <div className="mb-3 password__row-2">
            <label htmlFor="repeat" className="form-label">
              Repeat password
            </label>
            <input
              type="password"
              placeholder="Repeat password"
              className="form-control"
              id="repeat"
              name="repeat"
              onChange={handleInputChange}
            />
            {!checkPasswords && (
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
            !checkPasswords ||
            isEmptyField ||
            !hasUppercase ||
            !hasSpecialCharacter
          }
        >
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
