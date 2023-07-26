import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCompass,
  faHouse,
  faPlus,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { usePostsContext } from "../../contexts/PostsContextProvider";

export function Sidebar() {
  const activeStyle = ({ isActive }) =>
    isActive ? "active sidebar-link-child" : "sidebar-link-child";

  const { currentUser, logoutHandler } = useAuthContext();
  const { setShowCreatePostModal } = usePostsContext();

  return (
    <aside className="nav-sidebar">
      <div className="sidebar-links">
        <h2>tranquilHaven</h2>
        <NavLink className={activeStyle} to="/">
          <FontAwesomeIcon className="fa-icons" icon={faHouse} />
          <span>Home</span>
        </NavLink>
        <NavLink className={activeStyle} to="/explore">
          <FontAwesomeIcon className="fa-icons" icon={faCompass} />
          <span>Explore</span>
        </NavLink>
        <NavLink className={activeStyle} to="/bookmarks">
          <FontAwesomeIcon className="fa-icons" icon={faBookmark} />
          <span>Bookmarks</span>
        </NavLink>
        {/* <NavLink className={activeStyle} to={`/profile/${currentUser?._id}`}>
          <FontAwesomeIcon className="fa-icons" icon={faUser} />
          <span>Profile</span>
        </NavLink> */}

        <button
          className="create-post"
          onClick={() => setShowCreatePostModal(true)}
        >
          Create New Post
        </button>
      </div>
      <div className="sidebar-profile">
        <Link to={`/profile/${currentUser?._id}`}>
          <img src={currentUser?.image} alt="user" className="user-img" />
        </Link>
        <Link to={`/profile/${currentUser?._id}`}>
          <div className="profile-main">
            <p className="name">{`${currentUser?.firstName} ${" "} ${
              currentUser?.lastName
            }`}</p>
            <p>@{currentUser?.username}</p>
          </div>
        </Link>
        <FontAwesomeIcon
          icon={faRightFromBracket}
          className="fa-icons"
          onClick={logoutHandler}
          style={{ cursor: "pointer" }}
        />
      </div>
    </aside>
  );
}

export function BottomNavbar() {
  const { currentUser } = useAuthContext();
  return (
    <div className="bottom-navbar">
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} className="fa-icons" />
      </Link>
      <Link to="/explore">
        <FontAwesomeIcon icon={faCompass} className="fa-icons" />
      </Link>
      <div className="plus-outer">
        <FontAwesomeIcon icon={faPlus} className="fa-icons" />
      </div>

      <Link to="/bookmarks">
        <FontAwesomeIcon icon={faBookmark} className="fa-icons" />
      </Link>
      <Link to={`/profile/${currentUser?._id}`}>
        <FontAwesomeIcon icon={faUser} className="fa-icons" />
      </Link>
    </div>
  );
}
