import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { users as usersData } from "../../backend/db/users";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const [loggedIn, setLoggedIn] = useState(token);

  const navigate = useNavigate();
  const [users, setUsers] = useState([...usersData]);
  const [currentUser, setCurrentUser] = useState(JSON.parse(user));
  const [encodedToken, setEncodedToken] = useState(token);

  const [showEditProfileModal, setShowEditProfileModal] = useState(false);

  const loginHandler = async (
    username,
    password,
    email,
    firstName,
    lastName
  ) => {
    try {
      const {
        data: { encodedToken, foundUser },
      } = await axios.post("/api/auth/login", {
        username,
        password,
      });
      setCurrentUser(foundUser);
      setEncodedToken(encodedToken);
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
  const signupHandler = async (
    username,
    password,
    email,
    firstName,
    lastName
  ) => {
    try {
      const {
        data: { encodedToken, createdUser },
      } = await axios.post("/api/auth/signup", {
        username,
        password,
        email,
        firstName,
        lastName,
      });
      const userCreated = {
        ...createdUser,
        image: "/assets/images/default-avatar.jpg",
      };
      setUsers((users) => [...users, createdUser]);
      setCurrentUser(userCreated);
      setEncodedToken(encodedToken);
      localStorage.setItem("token", JSON.stringify(encodedToken));
      localStorage.setItem("user", JSON.stringify(userCreated));

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
    localStorage.removeItem("user");
    setLoggedIn(false);
    setCurrentUser(null);
    setEncodedToken(null);
    toast.success("Logged Out successfully", { className: "toast-message" });
  };

  const getUserDetails = (uName) => {
    const findUser = users.find(({ username }) => username === uName);

    return {
      name: `${findUser.firstName}  ${findUser.lastName}`,
      userImg: findUser.image,
    };
  };
  console.log("users", users);
  const values = {
    users,
    setUsers,
    currentUser,
    setCurrentUser,
    encodedToken,
    loggedIn,
    setLoggedIn,
    loginHandler,
    signupHandler,
    logoutHandler,
    getUserDetails,
    showEditProfileModal,
    setShowEditProfileModal,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
