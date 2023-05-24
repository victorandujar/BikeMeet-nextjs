import LoginForm from "@/components/LoginForm/LoginForm";
import LoginPageStyled from "@/styles/pages/LoginPageStyled";
import { secondaryFont, primaryFont } from "@/utils/fonts/fonts";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled className="login-page">
      <div className="login-page__heading">
        <div className="heading">
          <h2 className={`heading__title ${secondaryFont.className}`}>
            Welcome to BikeMeet
          </h2>
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
