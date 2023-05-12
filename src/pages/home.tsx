import LoginForm from "@/components/LoginForm/LoginForm";
import { Odibee_Sans } from "next/font/google";

const odibee = Odibee_Sans({ subsets: ["latin"], weight: "400" });

const Home = (): JSX.Element => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Home;
