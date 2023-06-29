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
      console.log("inside if");
      loginHandler(username.value, password.value);
    } else {
      toast.warning("Fill the required input fields", {
        className: "toast-message",
      });
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
