import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCompass,
  faHouse,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../../contexts/AuthContextProvider";

export default function Sidebar() {
  const activeStyle = ({ isActive }) =>
    isActive ? "active sidebar-link-child" : "sidebar-link-child";

  const { currentUser, logoutHandler } = useAuthContext();

  return (
    <aside className="nav-sidebar">
      <h2>tranquilHaven</h2>
      <div className="sidebar-links">
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
        {/* <NavLink className={activeStyle} to="/likedPosts">
          <FontAwesomeIcon className="fa-icons" icon={faHeart} />
          <span>Liked Posts</span>
        </NavLink> */}
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
            <p>{currentUser?.email}</p>
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
