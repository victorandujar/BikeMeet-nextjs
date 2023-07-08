import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import endpoints from "@/utils/endpoints/endpoints";

const ProtectedRoute = ({ children }: any): React.ReactElement => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [shouldRenderLogin, setShouldRenderLogin] = useState(true);
  const { pathname } = router;

  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();

      const allowedPaths = [
        endpoints.login,
        endpoints.signup,
        "/recovery-email/[validate-email]",
        "/restore-password/[userId]",
      ].includes(pathname);

      if (
        session &&
        (pathname === endpoints.login || pathname === endpoints.signup)
      ) {
        router.replace(endpoints.dashboard);
      } else if (!session && !allowedPaths) {
        router.replace(endpoints.login);
      }

      setLoading(false);

      if (
        session &&
        (pathname === endpoints.login || pathname === endpoints.signup)
      ) {
        setShouldRenderLogin(false);
      } else {
        setShouldRenderLogin(true);
      }
    };

    if (status === "loading") {
      return;
    }

    fetchSession();
  }, [router, session, status, pathname]);

  if (loading || status === "loading" || !shouldRenderLogin) {
    return <></>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
