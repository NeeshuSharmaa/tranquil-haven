import { Navigate, Route, Routes, useLocation } from "react-router";
import "./App.css";
import Login from "./frontend/pages/loginSignup/Login";
import Signup from "./frontend/pages/loginSignup/Signup";
import Explore from "./frontend/pages/explore/Explore";
import Bookmarks from "./frontend/pages/bookmarks/Bookmarks";
import Profile from "./frontend/pages/profile/Profile";
import Post from "./frontend/pages/post/Post";
import NotFound from "./frontend/pages/notFound/NotFound";
import Home from "./frontend/pages/home/Home";
import PrivateRoute from "./frontend/components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./frontend/components/sidebar/Sidebar";
import PostModal from "./frontend/components/postModal/PostModal";
import EditProfileModal from "./frontend/components/editprofileModal/EditProfileModal";
import UsersListSidebar from "./frontend/components/usersListSidebar/UsersListSidebar";
import CreatePost from "./frontend/components/createPost/CreatePost";

function App() {
  const { pathname } = useLocation();
  const showSidebars =
    pathname !== "/login" && pathname !== "/signup" && pathname !== "/notfound";
  const appStyle =
    pathname !== "/login" && pathname !== "/signup" && pathname !== "/notfound"
      ? "App"
      : "";

  return (
    <div className={appStyle}>
      {showSidebars && <Sidebar />}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/explore"
          element={
            <PrivateRoute>
              <Explore />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <PrivateRoute>
              <Bookmarks />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/posts/:id"
          element={
            <PrivateRoute>
              <Post />
            </PrivateRoute>
          }
        />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/notfound" />} />
      </Routes>
      {showSidebars && <UsersListSidebar />}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <PostModal />
      <EditProfileModal />
      <CreatePost />
    </div>
  );
}

export default App;
