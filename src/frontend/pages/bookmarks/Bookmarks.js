import Post from "../../components/post/Post";
import { usePostsContext } from "../../contexts/PostsContextProvider";
import "./Bookmarks.css";

import { Link } from "react-router-dom";

export default function Bookmarks() {
  const {
    postsState: { posts, bookmarks },
  } = usePostsContext();
  const bookmarkIds = bookmarks.map(({ _id }) => _id);
  const bookmarkPosts = posts.filter(({ _id: id }) =>
    bookmarkIds.some((ID) => ID === id)
  );

  return (
    <div className="bookmarks">
      <Link to="/">
        <h2 className="logo">tranquilHaven</h2>
      </Link>
      {bookmarkPosts.length ? (
        <div className="posts-outer-container">
          {bookmarkPosts?.map((post) => (
            <Post {...post} key={post._id} />
          ))}
        </div>
      ) : (
        <div className="empty-posts-container">
          <span>You have not bookmarked anything yet</span>
        </div>
      )}
    </div>
  );
}
