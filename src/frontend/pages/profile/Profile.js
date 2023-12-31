import { Link, useParams } from "react-router-dom";
import Post from "../../components/post/Post";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { usePostsContext } from "../../contexts/PostsContextProvider";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faRightFromBracket,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import EditProfileModal from "../../components/editprofileModal/EditProfileModal";

export default function Profile() {
  const {
    encodedToken,
    currentUser,
    users,
    setShowEditProfileModal,
    logoutHandler,
    followUser,
    unfollowUser,

    showEditProfileModal,
  } = useAuthContext();

  const {
    postsState: { posts },
  } = usePostsContext();

  const { id } = useParams();

  const findUser = users?.find(({ _id }) => {
    return _id === id;
  });
  const userPosts = posts?.filter(
    ({ username }) => username === findUser?.username
  );
  const showActionBtns =
    findUser.username === currentUser.username ? true : false;

  const userInFollowing = currentUser?.following.find(
    ({ username }) => username === findUser.username
  );

  return (
    <div className="profile">
      <Link to="/">
        <h2 className="logo">tranquilHaven</h2>
      </Link>
      <section className="profile-hero-section">
        <div className="hero-header">
          <div className="user-info">
            <img
              src={findUser?.image}
              alt="user-profile"
              className="profile-photo"
            />
            <div className="user">
              <p>{`${findUser?.firstName} ${" "} ${findUser?.lastName}`}</p>
              <p className="grey-color">@{findUser?.username}</p>
            </div>
          </div>
          {showActionBtns && (
            <div className="profile-hero-actions">
              <button
                className="edit"
                onClick={() => setShowEditProfileModal(true)}
              >
                Edit
              </button>
              <button className="logout" onClick={logoutHandler}>
                Logout
              </button>
              <div
                className="action-icons"
                onClick={() => setShowEditProfileModal(true)}
              >
                <FontAwesomeIcon icon={faUserPen} className="fa-icons" />
              </div>
              <div className="action-icons" onClick={logoutHandler}>
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  className="fa-icons"
                />
              </div>
            </div>
          )}
          {!showActionBtns && (
            <button
              className={userInFollowing ? "unfollow-btn" : "follow-btn"}
              onClick={() =>
                userInFollowing
                  ? unfollowUser(id, encodedToken)
                  : followUser(id, encodedToken)
              }
            >
              {userInFollowing ? "Unfollow" : "Follow"}
            </button>
          )}
        </div>
        <div className="hero-mid">
          <p>{findUser?.bio}</p>

          <Link to={findUser?.website}>
            <p>{findUser?.website}</p>
          </Link>
        </div>

        <div className="hero-footer">
          <p>{userPosts?.length} posts</p>
          <p>{findUser?.followers.length} followers</p>
          <p>{findUser?.following.length} following</p>
        </div>
      </section>
      {userPosts.length ? (
        <div className="posts-outer-container">
          {userPosts?.map((post) => (
            <Post {...post} key={post._id} />
          ))}
        </div>
      ) : (
        <div className="empty-posts-container">
          {" "}
          You haven't posted anything yet
        </div>
      )}
      {showEditProfileModal && <EditProfileModal />}
    </div>
  );
}
