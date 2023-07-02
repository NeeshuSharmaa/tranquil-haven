import { Link } from "react-router-dom";
import Post from "../../components/post/Post";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { usePostsContext } from "../../contexts/PostsContextProvider";
import "./Profile.css";

export default function Profile() {
  const { currentUser, setShowEditProfileModal } = useAuthContext();
  const { postsByUser } = usePostsContext();

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
              <p className="grey-color">@{currentUser.username}</p>
            </div>
          </div>
          <div className="profile-hero-actions">
            <button
              className="edit"
              onClick={() => setShowEditProfileModal(true)}
            >
              Edit Profile
            </button>
            <button className="logout">Logout</button>
          </div>
        </div>
        <div className="hero-mid">
          <p>How you doing? SHINING!</p>

          <Link to="">www.hello.com</Link>
        </div>

        <div className="hero-footer">
          <p>{postsByUser.length} posts</p>
          <p>{currentUser.followers.length} followers</p>
          <p>{currentUser.following.length} following</p>
        </div>
      </section>
      <div className="posts-outer-container">
        {postsByUser?.map((post) => (
          <Post {...post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
