import Button from "../../components/Button/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Session } from "next-auth";
import AuthWelcomePageStyled from "./AuthWelcomePageStyled";
import { signOut } from "next-auth/react";
import { primaryFont } from "@/utils/fonts/fonts";

interface GoggleWelcomePageProps {
  session: Session;
}

const GoogleWelcomePage = ({
  session,
}: GoggleWelcomePageProps): JSX.Element => {
  const router = useRouter();
  return (
    <AuthWelcomePageStyled
      className={`google-welcomePage ${primaryFont.className}`}
    >
      <Image
        src={session.user?.image!}
        alt={`${session.user?.name} image`}
        width={150}
        height={150}
        className="google-welcomePage__image"
      />
      <h2 className="google-welcomePage__text">Welcome {session.user?.name}</h2>
      <Button
        isDisabled={false}
        text="Continue"
        actionOnClick={() => router.push("/home")}
      />
      <Button
        isDisabled={false}
        text="Log out"
        actionOnClick={() => signOut()}
      />
    </AuthWelcomePageStyled>
  );
};

export default GoogleWelcomePage;
