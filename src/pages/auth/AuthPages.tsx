import { NavLink, Outlet } from "react-router-dom";
import { AuthPagesContainer } from "./AuthPages.style";

export function AuthPages() {
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