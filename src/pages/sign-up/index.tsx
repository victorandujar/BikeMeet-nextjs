import RegisterForm from "@/components/RegisterForm/RegisterForm";
import RegisterPageStyled from "@/pages/sign-up/RegisterPageStyled";
import { useAppSelector } from "@/store/hooks";
import { primaryFont, secondaryFont } from "@/utils/fonts/fonts";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SignUpPage: NextPage = (): React.ReactElement => {
  // const router = useRouter();
  // const { status } = useSession();

  // // const { token } = useAppSelector((state) => state.user);

  // // useEffect(() => {
  // //   if (status === "authenticated" || token) {
  // //     router.replace("/dashboard");
  // //   }
  // // }, [status, router, token]);

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
