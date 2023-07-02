import Post from "../../components/post/Post";
import { usePostsContext } from "../../contexts/PostsContextProvider";
import "./Bookmarks.css";

export default function Bookmarks() {
  const {
    postsState: { posts, bookmarks },
  } = usePostsContext();
  const bookmarkIds = bookmarks.map(({ _id }) => _id);
  const bookmarkPosts = posts.filter(({ _id: id }) =>
    bookmarkIds.some((ID) => ID === id)
  );
  console.log(bookmarkPosts);

  return (
    <div className="bookmarks">
      <div className="posts-outer-container">
        {bookmarkPosts?.map((post) => (
          <Post {...post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
