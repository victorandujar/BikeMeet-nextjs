import BottomNavbarWrapper from "../BottomNavbarWrapper/BottomNavbarWrapper";
import Header from "../Header/Header";

interface LayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <BottomNavbarWrapper />
    </>
  );
};

export default Layout;
