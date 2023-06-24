import { LogInContainer } from "./LogIn.style";

export function LogIn() {
    return <LogInContainer>
        <h2>Welcome back</h2>
        <form className="login-form">
            <div className="input-container">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" placeholder="example@example.com" autoComplete="username"/>
            </div>
            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="********" autoComplete="current-password"/>
            </div>
            <button type="submit">Log in</button>
        </form>
    </LogInContainer>
}