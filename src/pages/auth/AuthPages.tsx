import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthPagesContainer } from "./AuthPages.style";
import { useAuthContext } from "../../contexts";
import { useEffect } from "react";

export function AuthPages() {
  const navigation = useNavigate();
  const { authState } = useAuthContext();

  useEffect(() => {
    if (authState.isAuthenticated) {
      navigation("/feed");
    }
  }, [authState.isAuthenticated]);

    return <AuthPagesContainer>
        <div className="nav">
          <div>
            <NavLink to="register">
              <div className="nav-text">REGISTER</div>
              <div className="indicator"></div>
            </NavLink>
          </div>
          <div>
            <NavLink to="" end>
              <div className="nav-text">LOG IN</div>
              <div className="indicator"></div>
            </NavLink>
          </div>
        </div>
        <div className="outlet-container">
          <Outlet />
        </div>
    </AuthPagesContainer>
}