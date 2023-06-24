import { Link } from "react-router-dom";

import "./loginSignup.css";
import { useAuthContext } from "../../contexts/AuthContextProvider";

export default function Login() {
  const { loginHandler } = useAuthContext();

  const loginHandleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    if (username && password) {
      loginHandler(username.value, password.value);
    } else {
      // Fill the required fields toast error
    }
  };
  return (
    <div className="auth-page">
      <div className="auth-image-container">
        <img src="/assets/images/friends-2.jpg" alt="connect" />
      </div>
      <div className="auth-form-container">
        <h1>Welcome to Tranquil Haven</h1>
        <form className="auth-flex-container" onSubmit={loginHandleSubmit}>
          <input type="username" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <button
            onClick={(e) => {
              e.preventDefault();
              loginHandler("adarshbalika", "adarshBalika123");
            }}
          >
            {" "}
            Login as Guest
          </button>
          <button type="submit">Log In</button>
          <p>
            <span>New to Tranquil Haven?</span>
            <Link to="/signup">Join Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
