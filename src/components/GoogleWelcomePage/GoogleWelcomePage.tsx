import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Session } from "next-auth";
import GoogleWelcomePageStyled from "./GoogleWelcomePageStyled";
import { Poppins } from "next/font/google";
import { signOut } from "next-auth/react";

interface GoggleWelcomePageProps {
  session: Session;
}

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const GoogleWelcomePage = ({
  session,
}: GoggleWelcomePageProps): JSX.Element => {
  const router = useRouter();
  return (
    <GoogleWelcomePageStyled
      className={`google-welcomePage ${poppins.className}`}
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
    </GoogleWelcomePageStyled>
  );
};

export default GoogleWelcomePage;
