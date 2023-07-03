import { Link } from "react-router-dom";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { toast } from "react-toastify";

export default function Signup() {
  const { signupHandler } = useAuthContext();

  const [hidePass, setHidePass] = useState({
    password: true,
    confirmPass: true,
  });

  const signupHandleSubmit = (e) => {
    e.preventDefault();
    const { email, firstName, lastName, username, password, confirmPassword } =
      e.target.elements;

    if (password.value === confirmPassword.value) {
      signupHandler(
        username.value,
        password.value,
        email.value,
        firstName.value,
        lastName.value
      );
    } else {
      toast.warning("Password and confirm password must match", {
        className: "toast-message",
      });
    }
  };
  return (
    <div className="auth-page">
      <form className="auth-flex-container" onSubmit={signupHandleSubmit}>
        <h1>Create Tranquil Haven's account</h1>
        <input type="email" name="email" placeholder="Email" required />
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
          <input type="text" name="lastName" placeholder="Last Name" required />
        </div>

        <input type="text" name="username" placeholder="Username" required />
        <div>
          <input
            type={hidePass.password ? "password" : "text"}
            name="password"
            placeholder="Password"
            required
          />
          {hidePass.password ? (
            <FontAwesomeIcon
              style={{ cursor: "pointer", color: "grey" }}
              icon={faEyeSlash}
              onClick={() =>
                setHidePass((prev) => ({
                  ...prev,
                  password: !prev.password,
                }))
              }
            />
          ) : (
            <FontAwesomeIcon
              style={{ cursor: "pointer", color: "grey" }}
              icon={faEye}
              onClick={() =>
                setHidePass((prev) => ({
                  ...prev,
                  password: !prev.password,
                }))
              }
            />
          )}
        </div>
        <div>
          <input
            type={hidePass.confirmPass ? "password" : "text"}
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
          {hidePass.confirmPass ? (
            <FontAwesomeIcon
              style={{ cursor: "pointer", color: "grey" }}
              icon={faEyeSlash}
              onClick={() =>
                setHidePass((prev) => ({
                  ...prev,
                  confirmPass: !prev.confirmPass,
                }))
              }
            />
          ) : (
            <FontAwesomeIcon
              style={{ cursor: "pointer", color: "grey" }}
              icon={faEye}
              onClick={() =>
                setHidePass((prev) => ({
                  ...prev,
                  confirmPass: !prev.confirmPass,
                }))
              }
            />
          )}
        </div>

        <button>Sign up</button>
        <p>
          <span>Already have an account?</span>
          <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
