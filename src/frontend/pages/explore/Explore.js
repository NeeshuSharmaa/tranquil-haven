import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "../../components/post/Post";
import { usePostsContext } from "../../contexts/PostsContextProvider";
import "./Explore.css";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function Explore() {
  const {
    postsState: { posts },
  } = usePostsContext();
  return (
    <div className="explore">
      <div className="head">
        <FontAwesomeIcon icon={faArrowLeftLong} />
        <h2>Explore</h2>
      </div>
      <div className="posts-outer-container">
        {posts?.map((post) => (
          <Post {...post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
