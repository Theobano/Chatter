import { Link } from "react-router-dom";
import { NavBarContainer } from "./NavBar.style";

export function NavBar() {
    return (
        <NavBarContainer>
            <Link to="/" className="logo">
                CHATTER
            </Link>
            <div className="nav-inpage">
                <Link to="/">Home</Link>
                <a href="#about">About us</a>
                <Link to="#contact">Contact</Link>
                <Link to="blogs">Blogs</Link>
            </div>
            <div className="nav-auth">
                <Link to="/auth">Log in</Link>
                <Link to="/auth/register">Sign up</Link>
            </div>
        </NavBarContainer>
    );
}