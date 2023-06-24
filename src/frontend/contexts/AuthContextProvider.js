import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const token = localStorage.getItem("token");

  const [loggedIn, setLoggedIn] = useState(token);

  const location = useLocation();
  const navigate = useNavigate();

  const fromLocation = location.state?.from?.pathname;
  console.log("from location", fromLocation);

  const loginHandler = async (username, password) => {
    console.log(username, password);
    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });
      console.log(response);
      localStorage.setItem("token", JSON.stringify(response.data.encodedToken));
      setLoggedIn(true);
      toast.success("Logged in successfully", { className: "toast-message" });
      fromLocation === "undefined" ? navigate("/") : navigate(fromLocation);
    } catch (e) {
      console.log("login service error", e);
      toast.error("Log In service error", { className: "toast-message" });
    }
  };
  const signupHandler = async (username, password) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        username,
        password,
      });

      localStorage.setItem("token", JSON.stringify(response.data.encodedToken));
      setLoggedIn(true);
      toast.success("Signed Up successfully", { className: "toast-message" });
      fromLocation === "undefined" ? navigate("/") : navigate(fromLocation);
    } catch (e) {
      console.log("signup service error", e);
      toast.error("Sign up service error", { className: "toast-message" });
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    toast.success("Logged Out successfully", { className: "toast-message" });
  };

  const values = {
    loggedIn,
    setLoggedIn,
    loginHandler,
    signupHandler,
    logoutHandler,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
