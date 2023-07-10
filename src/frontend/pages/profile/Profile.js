import { Link, useParams } from "react-router-dom";
import Post from "../../components/post/Post";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { usePostsContext } from "../../contexts/PostsContextProvider";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function Profile() {
  const {
    encodedToken,
    currentUser,
    users,
    setShowEditProfileModal,
    logoutHandler,
    followUser,
    unfollowUser,
    showUnfollowBtn,
    setShowUnfollowBtn,
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
      <div className="head">
        <FontAwesomeIcon icon={faArrowLeftLong} />
        <h2>Profile</h2>
      </div>
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
                Edit Profile
              </button>
              <button className="logout" onClick={logoutHandler}>
                Logout
              </button>
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

          <Link to={findUser?.website}>{findUser?.website}</Link>
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
    </div>
  );
}
