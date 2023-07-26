import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "../../components/post/Post";
import { usePostsContext } from "../../contexts/PostsContextProvider";
import "./Explore.css";
import { Link } from "react-router-dom";

export default function Explore() {
  const {
    postsState: { posts },
  } = usePostsContext();
  return (
    <div className="explore">
      <Link to="/">
        <h2 className="logo">tranquilHaven</h2>
      </Link>

      <div className="posts-outer-container">
        {posts?.map((post) => (
          <Post {...post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
