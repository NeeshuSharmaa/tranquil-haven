import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { users as usersData } from "../../backend/db/users";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const [loggedIn, setLoggedIn] = useState(token);

  const location = useLocation();
  const navigate = useNavigate();
  const [users, setUsers] = useState([...usersData]);
  const [currentUser, setCurrentUser] = useState(JSON.parse(user));

  const loginHandler = async (username, password) => {
    try {
      const {
        data: { encodedToken, foundUser },
      } = await axios.post("/api/auth/login", {
        username,
        password,
      });
      setCurrentUser(foundUser);
      localStorage.setItem("token", JSON.stringify(encodedToken));
      localStorage.setItem("user", JSON.stringify(foundUser));

      setLoggedIn(true);
      toast.success("Logged in successfully", { className: "toast-message" });
      navigate("/");
    } catch (e) {
      console.log("login service error", e);
      toast.error("Log In service error", { className: "toast-message" });
    }
  };
  const signupHandler = async (username, password) => {
    try {
      const {
        data: { encodedToken, createdUser },
      } = await axios.post("/api/auth/signup", {
        username,
        password,
      });
      setUsers((users) => [...users, createdUser]);
      setCurrentUser(createdUser);
      localStorage.setItem("token", JSON.stringify(encodedToken));
      localStorage.setItem("user", JSON.stringify(createdUser));

      setLoggedIn(true);
      toast.success("Signed Up successfully", { className: "toast-message" });
      navigate("/");
    } catch (e) {
      console.log("signup service error", e);
      toast.error("Sign up service error", { className: "toast-message" });
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setCurrentUser(null);
    toast.success("Logged Out successfully", { className: "toast-message" });
  };

  const getUserDetails = (uName) => {
    const findUser = users.find(({ username }) => username === uName);
    console.log("user", findUser);
    return {
      name: `${findUser.firstName}  ${findUser.lastName}`,
      userImg: findUser.image,
    };
  };

  const values = {
    users,
    currentUser,
    loggedIn,
    setLoggedIn,
    loginHandler,
    signupHandler,
    logoutHandler,
    getUserDetails,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
