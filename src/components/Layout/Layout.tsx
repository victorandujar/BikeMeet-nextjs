import useToken from "@/hooks/useToken/useToken";
import BottomNavbarWrapper from "../BottomNavbarWrapper/BottomNavbarWrapper";
import Header from "../Header/Header";
import { useEffect } from "react";

const Layout = (): JSX.Element => {
  const { getToken } = useToken();

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <>
      <Header />
      <BottomNavbarWrapper />
    </>
  );
};

export default Layout;
