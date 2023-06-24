import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

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
      fromLocation === "undefined" ? navigate("/") : navigate(fromLocation);
    } catch (e) {
      console.log("login service error", e);
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
      fromLocation === "undefined" ? navigate("/") : navigate(fromLocation);
    } catch (e) {
      console.log("signup service error", e);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
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
