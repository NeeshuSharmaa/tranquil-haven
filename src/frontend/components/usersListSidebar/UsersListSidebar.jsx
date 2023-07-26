import { useEffect } from "react";
import "./UserslistSidebar.css";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default function UsersListSidebar() {
  const { currentUser, users, followUser, encodedToken } = useAuthContext();

  const suggestedFollowers = users?.filter(
    ({ username }) =>
      username !== currentUser?.username &&
      !currentUser?.following.some((user) => user.username === username)
  );

  return (
    <aside className="users-sidebar">
      <h3>Suggestion for you</h3>
      <input type="text" placeholder="Search for users" />
      <div className="users-list">
        {" "}
        {suggestedFollowers?.map((user) => (
          <div key={user._id}>
            <div className="head-left">
              <Link to={`/profile/${user._id}`}>
                <img src={user.image} alt={user.username} />
                <div>
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                  <span className="grey-color">@{user.username}</span>
                </div>
              </Link>
            </div>
            <button
              className="follow-btn"
              onClick={() => followUser(user._id, encodedToken)}
            >
              Follow
            </button>
            <FontAwesomeIcon icon={faUserPlus} className="follow-icon" />
          </div>
        ))}
      </div>
    </aside>
  );
}
