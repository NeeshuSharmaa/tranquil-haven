import { Route, Routes } from "react-router";
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

function App() {
  return (
    <div className="App">
      <Sidebar />
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
          path="/post/:id"
          element={
            <PrivateRoute>
              <Post />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <aside className="suggested-followers"></aside>
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
    </div>
  );
}

export default App;
