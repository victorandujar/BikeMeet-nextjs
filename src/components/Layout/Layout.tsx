import useToken from "@/hooks/useToken/useToken";
import BottomNavbarWrapper from "../BottomNavbarWrapper/BottomNavbarWrapper";
import Header from "../Header/Header";
import { useEffect } from "react";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { getToken } = useToken();

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <BottomNavbarWrapper />
    </>
  );
};

export default Layout;
