import { RegisterContainer } from "./Register.style";

export function Register() {
    return <RegisterContainer>
        <h2>Register as a Writer/Reader</h2>
        <form className="register-form">
            <div className="name-container">
                <div className="input-container">
                    <label htmlFor="first-name">First name</label>
                    <input type="text" id="first-name" placeholder="John" autoComplete="given-name" required />
                </div>
                <div className="input-container">
                    <label htmlFor="last-name">Last name</label>
                    <input type="text" id="last-name" placeholder="Doe" autoComplete="family-name" required/>
                    </div>
            </div>
            <div className="input-container">
                <label htmlFor="role">You are joining as:</label>
                <select name="role" id="role" required>
                    <option value="reader">Reader</option>
                    <option value="writer">Writer</option>
                </select>
            </div>
            <div className="input-container">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" autoComplete="username" placeholder="example@example.com" required/>
            </div>
            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="********" autoComplete="new-password" required/>
            </div>
            <div className="input-container">
                <label htmlFor="confirm-password">Confirm password</label>
                <input type="password" id="confirm-password" placeholder="********" autoComplete="new-password" />
            </div>
            <button type="submit">Create account</button>
        </form>
    </RegisterContainer>
}