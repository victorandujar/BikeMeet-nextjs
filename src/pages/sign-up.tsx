import RegisterForm from "@/components/RegisterForm/RegisterForm";
import RegisterPageStyled from "@/styles/pages/RegisterPageStyled";
import { primaryFont, secondaryFont } from "@/utils/fonts/fonts";

const SignUpPage = (): JSX.Element => {
  return (
    <RegisterPageStyled className="register-page">
      <div className="register-page__heading heading">
        <h2 className={`heading__title ${secondaryFont.className}`}>
          Join our community!
        </h2>
        <span className={`heading__slogan ${primaryFont.className}`}>
          Start sharing your rides
        </span>
      </div>
      <div className="register-page__register-form">
        <RegisterForm />
      </div>
    </RegisterPageStyled>
  );
};

export default SignUpPage;
