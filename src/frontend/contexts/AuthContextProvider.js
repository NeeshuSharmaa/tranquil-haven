import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext();

export default function AuthContextProvider({ children }) {
  const token = JSON.parse(localStorage.getItem("token"));

  const [loggedIn, setLoggedIn] = useState(token);

  const loginHandler = async (username, password) => {
    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });
      console.log(response);
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
      console.log(response);
    } catch (e) {
      console.log("signup service error", e);
    }
  };

  const logoutHandler = () => {};

  const values = {
    loggedIn,
    setLoggedIn,
    loginHandler,
    signupHandler,
    logoutHandler,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
