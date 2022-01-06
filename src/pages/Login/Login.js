
import { Link } from "react-router-dom"
import "./login.css"

function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h1 className="loginLogo">Facebook</h1>
                    <span className="loginDesc">Connect with friends and the world around you on Facebook</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <Link to="home" className="log">Log In</Link>
                        <span className="loginForgot">Forgot Password?</span>
                        <Link to="register" className="loginRegister">Create a New Account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;
