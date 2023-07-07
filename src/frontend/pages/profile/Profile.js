import { Link } from "react-router-dom";
import Post from "../../components/post/Post";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { usePostsContext } from "../../contexts/PostsContextProvider";
import "./Profile.css";

export default function Profile() {
  const { currentUser, setShowEditProfileModal, logoutHandler } =
    useAuthContext();
  const {
    postsState: { userPosts },
  } = usePostsContext();

  console.log("from profile", userPosts, "current", currentUser);

  return (
    <div className="profile">
      <section className="profile-hero-section">
        <div className="hero-header">
          <div className="user-info">
            <img
              src={currentUser.image}
              alt="user-profile"
              className="profile-photo"
            />
            <div className="user">
              <p>{`${currentUser?.firstName} ${" "} ${
                currentUser?.lastName
              }`}</p>
              <p className="grey-color">@{currentUser?.username}</p>
            </div>
          </div>
          <div className="profile-hero-actions">
            <button
              className="edit"
              onClick={() => {
                setShowEditProfileModal(true);
                console.log("user", currentUser);
              }}
            >
              Edit Profile
            </button>
            <button className="logout" onClick={logoutHandler}>
              Logout
            </button>
          </div>
        </div>
        <div className="hero-mid">
          <p>{currentUser?.bio}</p>

          <Link to={currentUser?.website}>{currentUser?.website}</Link>
        </div>

        <div className="hero-footer">
          <p>{userPosts.length} posts</p>
          <p>{currentUser?.followers.length} followers</p>
          <p>{currentUser?.following.length} following</p>
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
