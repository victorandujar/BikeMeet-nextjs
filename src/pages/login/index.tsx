import LoginForm from "@/components/LoginForm/LoginForm";
import LoginPageStyled from "@/pages/login/LoginPageStyled";
import { secondaryFont, primaryFont } from "@/utils/fonts/fonts";
import { NextPage } from "next";

const LoginPage: NextPage = (): JSX.Element => {
  return (
    <LoginPageStyled className="login-page">
      <div className="login-page__heading">
        <div className="heading">
          <div className="heading__welcome">
            <h2 className={`heading__title ${secondaryFont.className}`}>
              Welcome
            </h2>
          </div>
          <span className={`heading__slogan  ${primaryFont.className}`}>
            Share your rides with others and be part of the greatest cycling
            community!
          </span>
        </div>
      </div>
      <div className="login-page__login-form">
        <LoginForm />
      </div>
    </LoginPageStyled>
  );
};

export default LoginPage;
