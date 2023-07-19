import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar, Topbar } from "../../../components";
import { PrivateRouteWrapperContainer } from "./PrivateRouteWrapper.style";
import { useRef, useEffect } from "react";
import { ArticleProvider, useAuthContext } from "../../../contexts";
import { getAuth } from "firebase/auth";

export function PrivateRouteWrapper() {
  const { authState } = useAuthContext();
  const navigation = useNavigate();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const user = getAuth().currentUser;

  useEffect(() => {
    if (!authState.isAuthenticated) {
      navigation("/auth");
    }
  }, [authState.isAuthenticated]);

  useEffect(() => {
    if (user) {
      if (!user.emailVerified) {
        navigation("/auth/verify-email");
      }
    }
  }, [user?.emailVerified]);
  return (
    <PrivateRouteWrapperContainer>
      <Sidebar sidebarRef={sidebarRef} />
      <main>
        <Topbar sidebarRef={sidebarRef} />
        <ArticleProvider>
          <Outlet />
        </ArticleProvider>
      </main>
    </PrivateRouteWrapperContainer>
  );
}
