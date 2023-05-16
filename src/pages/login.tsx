import LoginForm from "@/components/LoginForm/LoginForm";
import LoginPageStyled from "@/styles/pages/LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled className="login-page">
      <div className="login-page__heading">
        <div className="heading">
          <h2 className={`heading__title`}>Welcome to BikeMeet</h2>
          <span className={`heading__slogan`}>
            Share your rides with others and be part of the greatest cycling
            community.
          </span>
        </div>
        <button type="button" className={`btn btn-outline-primary`}>
          Sign up
        </button>
      </div>
      <div className="login-page__login-form">
        <LoginForm />
      </div>
    </LoginPageStyled>
  );
};

export default LoginPage;
