import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCompass,
  faHeart,
  faHouse,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const activeStyle = ({ isActive }) =>
    isActive ? "active sidebar-link-child" : "sidebar-link-child";

  return (
    <aside className="nav-sidebar">
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
        <NavLink className={activeStyle} to="/likedPosts">
          <FontAwesomeIcon className="fa-icons" icon={faHeart} />
          <span>Liked Posts</span>
        </NavLink>
      </div>
      <div className="sidebar-profile">
        <img
          src="/assets/images/guest_user.jpg"
          alt="user"
          className="user-img"
        />
        <div className="profile-main">
          <p className="name">Neeya Sharma</p>
          <p>neeyasharmaa@gmail.com</p>
        </div>
        <FontAwesomeIcon icon={faRightFromBracket} className="fa-icons" />
      </div>
    </aside>
  );
}
