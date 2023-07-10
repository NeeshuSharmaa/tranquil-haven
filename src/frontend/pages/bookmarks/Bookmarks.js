import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "../../components/post/Post";
import { usePostsContext } from "../../contexts/PostsContextProvider";
import "./Bookmarks.css";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function Bookmarks() {
  const {
    postsState: { posts, bookmarks },
  } = usePostsContext();
  const bookmarkIds = bookmarks.map(({ _id }) => _id);
  const bookmarkPosts = posts.filter(({ _id: id }) =>
    bookmarkIds.some((ID) => ID === id)
  );
  console.log("rendering");
  return (
    <div className="bookmarks">
      <div className="head">
        <FontAwesomeIcon icon={faArrowLeftLong} />
        <h2>Bookmarks</h2>
      </div>
      {bookmarkPosts.length ? (
        <div className="posts-outer-container">
          {bookmarkPosts?.map((post) => (
            <Post {...post} key={post._id} />
          ))}
        </div>
      ) : (
        <div className="empty-posts-container">
          You have not bookmarked anything yet
        </div>
      )}
    </div>
  );
}
