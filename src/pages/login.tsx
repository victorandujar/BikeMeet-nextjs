import LoginForm from "@/components/LoginForm/LoginForm";
import LoginPageStyled from "@/styles/pages/LoginPageStyled";
import { Poppins, Odibee_Sans } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const obidee = Odibee_Sans({ subsets: ["latin"], weight: "400" });

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled className="login-page">
      <div className="login-page__heading">
        <div className="heading">
          <h2 className={`heading__title ${obidee.className}`}>
            Welcome to BikeMeet
          </h2>
          <span className={`heading__slogan  ${poppins.className}`}>
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
