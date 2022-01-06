

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
                      <button className="loginButton"><a href="home" className="log">Log In</a></button>
                      <span className="loginForgot">Forgot Password?</span>
                      <button className="loginRegister"><a href="register" className="register">Create a New Account</a></button>
                  </div>
               </div>
            </div>
        </div>
    )
}
export default Login;
