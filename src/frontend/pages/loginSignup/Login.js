import { Link } from "react-router-dom";

import "./loginSignup.css";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { toast } from "react-toastify";

export default function Login() {
  const { loginHandler } = useAuthContext();

  const loginHandleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;

    if (username.value && password.value) {
      loginHandler(username.value, password.value);
    } else {
      toast.warning("Fill the required input fields", {
        className: "toast-message",
      });
    }
  };
  return (
    <div className="auth-page">
      <div className="auth-hero-container">
        <h1 className="logo-head">Welcome to Tranquil Haven</h1>

        <h1>Discover peace in the digital realm</h1>
        <img src="/assets/images/hero-img.png" alt="tranquil-haven" />
      </div>
      <div className="auth-form-container">
        <h2>Log In</h2>
        <form className="auth-flex-container" onSubmit={loginHandleSubmit}>
          <input type="username" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <button
            onClick={(e) => {
              e.preventDefault();
              loginHandler("neeyasharmaa", "neeya123");
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
