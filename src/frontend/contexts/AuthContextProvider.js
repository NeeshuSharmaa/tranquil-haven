import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const usersData = JSON.parse(localStorage.getItem("users"));

  const [loggedIn, setLoggedIn] = useState(token);

  const navigate = useNavigate();
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(JSON.parse(user));
  const [encodedToken, setEncodedToken] = useState(token);

  const [showEditProfileModal, setShowEditProfileModal] = useState(false);

  const loginHandler = async (username, password) => {
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
      getUsers();

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

      setCurrentUser(createdUser);
      setEncodedToken(encodedToken);
      localStorage.setItem("token", JSON.stringify(encodedToken));
      localStorage.setItem("user", JSON.stringify(createdUser));

      setLoggedIn(true);
      getUsers();

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
    localStorage.removeItem("posts");
    localStorage.removeItem("users");
    navigate(0);
    toast.success("Logged Out successfully", { className: "toast-message" });
  };

  const getUsers = async () => {
    try {
      const {
        status,
        data: { users },
      } = await axios.get("/api/users");
      if (status === 200) {
        setUsers(users);

        localStorage.setItem("users", JSON.stringify(users));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const followUser = async (userId, authorization) => {
    try {
      const {
        data: { followUser, user },
      } = await axios.post(
        `/api/users/follow/${userId}`,
        {},
        {
          headers: {
            authorization,
          },
        }
      );
      setCurrentUser(user);
      const usersAfterUpdateOne = users.map((user) =>
        user.username === followUser.username ? followUser : user
      );
      const updatedUsers = usersAfterUpdateOne.map((USER) =>
        USER.username === user.username ? user : USER
      );

      setUsers(updatedUsers);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      toast.success("User followed!", { className: "toast-message" });
    } catch (e) {
      console.log(e);
    }
  };
  const unfollowUser = async (userId, authorization) => {
    try {
      const {
        data: { followUser, user },
      } = await axios.post(
        `/api/users/unfollow/${userId}`,
        {},
        {
          headers: {
            authorization,
          },
        }
      );

      setCurrentUser(user);
      const usersAfterUpdateOne = users.map((user) =>
        user.username === followUser.username ? followUser : user
      );
      const updatedUsers = usersAfterUpdateOne.map((USER) =>
        USER.username === user.username ? user : USER
      );
      console.log(updatedUsers);

      setUsers(updatedUsers);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    } catch (e) {
      console.log(e);
    }
  };

  const getUserDetails = (uName) => {
    const findUser = users?.find(({ username }) => username === uName);

    return {
      name: `${findUser?.firstName}  ${findUser?.lastName}`,
      userImg: findUser?.image,
    };
  };
  const [showUnfollowBtn, setShowUnfollowBtn] = useState(false);
  const values = {
    users,
    setUsers,
    showUnfollowBtn,
    setShowUnfollowBtn,
    currentUser,
    setCurrentUser,
    encodedToken,
    loggedIn,
    getUsers,
    setLoggedIn,
    loginHandler,
    signupHandler,
    logoutHandler,
    followUser,
    unfollowUser,
    getUserDetails,
    showEditProfileModal,
    setShowEditProfileModal,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
