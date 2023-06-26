import Image from "next/image";
import registerImage from "../../../public/image/registerImage.jpg";
import { secondaryFont, primaryFont } from "@/utils/fonts/fonts";
import RegisterFormStyled from "./RegisterFormStyled";
import Link from "next/link";
import { useState } from "react";
import { UserRegisterCredentialsForm } from "@/hooks/useUser/types";
import useUser from "@/hooks/useUser/useUser";
import { CircularProgress } from "@mui/material";
import { AxiosError } from "axios";
import {
  errorsCodeStatus,
  errorsMessages,
} from "@/utils/userFeedback/errorsManager";
import { sucessManagerStatusCodes } from "@/utils/userFeedback/successManager";
import { userEndpoints } from "@/utils/endpoints/endpoints";

const RegisterForm = (): React.ReactElement => {
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
  const [isLoading, setIsLoading] = useState(false);
  const [isConflict, setIsConflict] = useState(false);
  const [isNetworkFail, setIsNetworkFail] = useState(false);
  const [isUserRegistered, setIsUserRegistered] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setIsConflict(false);
    setIsNetworkFail(false);
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

    setIsConflict(false);
    setIsNetworkFail(false);
    setIsLoading(true);

    try {
      const { response } = await registerUser({
        name: formData.name,
        surname: formData.surname,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      const checkRegisterResponse =
        response.status === sucessManagerStatusCodes.created;

      setIsLoading(false);
      setIsUserRegistered(checkRegisterResponse);
    } catch (error) {
      const { response, message } = error as AxiosError;
      const checkIsConflict = response?.status === errorsCodeStatus.conflict;
      const checkNetworkFail = message === errorsMessages.networkFail;

      setIsConflict(checkIsConflict);
      setIsNetworkFail(checkNetworkFail);
      setIsLoading(false);
    }
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
          <div className="mb-3 fields__row-2">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="form-control "
              id="name"
              name="name"
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </div>
          <div className="mb-3 fields__row-2">
            <label htmlFor="surname" className="form-label">
              Surname
            </label>
            <input
              type="text"
              placeholder="Enter your surname"
              className="form-control"
              id="surname"
              name="surname"
              onChange={handleInputChange}
              disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
          />
        </div>
        <div className="register-form__in-row password">
          <div className="fields__row-2">
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
              disabled={isLoading}
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
          <div className="fields__row-2">
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
              disabled={isLoading}
            />
            <div className="messages">
              {!checkPasswords && (
                <span className="no-match" hidden={isRepeatedPasswordEmpty}>
                  Passwords do not match!
                </span>
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-primary-accent"
          disabled={
            !checkPasswords ||
            isEmptyField ||
            !hasUppercase ||
            !hasSpecialCharacter ||
            isLoading
          }
        >
          Join us!
        </button>
        <div className="loader__container  modals-messages">
          {isLoading && <CircularProgress />}
          <div className={`${primaryFont.className}`}>
            {isConflict && (
              <span className="modals-messages__error" hidden={!isConflict}>
                Seems this user already exists.
              </span>
            )}
            {isNetworkFail && (
              <span className="modals-messages__error" hidden={!isNetworkFail}>
                Ooops. Something went wrong. Try again!
              </span>
            )}
            {isUserRegistered && (
              <span
                className="modals-messages__success"
                hidden={!isUserRegistered}
              >
                You have been registered to BikeMeet. Welcome!
              </span>
            )}
          </div>
        </div>
        <div className="register-interface__login login">
          <span className="login__text">Already a member?</span>
          <Link href={`${userEndpoints.login}`} className="login__link">
            Log in
          </Link>
        </div>
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
