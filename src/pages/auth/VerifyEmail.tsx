import { Link } from "react-router-dom";
import { VerifyEmailContainer } from "./VerifyEmail.style";
import { useState, useEffect } from "react";

export function VerifyEmail() {
    const [seconds, setSeconds] = useState(5);
    var isWaiting = seconds > 0;

    const onResendEmail = () => {
        setSeconds(5);
        console.log("Resend email");
    }
    
    useEffect(() => { 
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
            if (seconds === 0) {
                clearInterval(interval);
            } 
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <VerifyEmailContainer>
            <h2>Verify your email</h2>
            <p>We have sent you an email with a link to verify your email address. Please check your inbox and click on the link to verify your email address.</p>
            <p>Didn't get the
            email? {isWaiting?`You can resend in ${seconds} second${seconds>1?'s':''}.`:null}
            </p>
            <button disabled={isWaiting} onClick={onResendEmail}>
                Resend email</button>
            <p>Or you can <Link to="/auth">login</Link> to your account.</p>
        </VerifyEmailContainer>
    )
}