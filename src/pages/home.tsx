import { Odibee_Sans } from "next/font/google";

const odibee = Odibee_Sans({ subsets: ["latin"], weight: "400" });

const Home = (): JSX.Element => {
  return (
    <>
      <div className={odibee.className}>BikeMeet</div>
    </>
  );
};

export default Home;
