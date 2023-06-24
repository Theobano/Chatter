import { NavLink, Outlet } from "react-router-dom";
import { AuthContainer } from "./Auth.style";
import splash from "./auth-background-image.svg";

export function Auth() {
  return (
    <AuthContainer>
      <div className="aside">
        <div className="overlay">
          <h1>CHATTER</h1>
          <div>
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers
          </div>
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </AuthContainer>
  );
}
