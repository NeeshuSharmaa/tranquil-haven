import Post from "../../components/post/Post";
import { usePostsContext } from "../../contexts/PostsContextProvider";
import "./Explore.css";

export default function Explore() {
  const {
    postsState: { posts },
  } = usePostsContext();
  return (
    <div className="explore">
      <div className="posts-outer-container">
        {posts?.map((post) => (
          <Post {...post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
