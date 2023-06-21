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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
