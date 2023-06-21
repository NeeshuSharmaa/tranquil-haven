import { Link } from "react-router-dom";
import { loginHandler } from "../../services/auth/auth";

import "./loginSignup.css";

export default function Login() {
  const loginHandleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    loginHandler(username.value, password.value);
  };
  return (
    <div className="auth-page">
      <form className="auth-flex-container" onSubmit={loginHandleSubmit}>
        <input type="username" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        {/* <button type="submit">Use Guest Credentials</button> */}
        <button type="submit">Log In</button>
        <p>
          <span>New to Tranquil Haven?</span>
          <Link to="/signup">Join Here</Link>
        </p>
      </form>
    </div>
  );
}
