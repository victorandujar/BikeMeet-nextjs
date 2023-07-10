import useUser from "@/hooks/useUser/useUser";
import BottomNavbarWrapper from "../BottomNavbarWrapper/BottomNavbarWrapper";
import Header from "../Header/Header";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";
import { useAppDispatch } from "@/store/hooks";
import { getUserDataActionCreator } from "@/store/features/usersSlice/userSlice";
import { useEffect } from "react";

interface LayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const Layout = ({ children }: LayoutProps): React.ReactElement => {
  const { getUser } = useUser();

  const dispatch = useAppDispatch();

  const { data: session } = useSession();
  const sessionEmail = session?.user?.email;
  const user = useQuery("user", () => getUser({ email: sessionEmail! }), {
    enabled: Boolean(sessionEmail),
  });

  useEffect(() => {
    if (user.data) {
      dispatch(getUserDataActionCreator(user.data));
    }
  }, [dispatch, user.data]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <BottomNavbarWrapper />
    </>
  );
};

export default Layout;
