import { usePostsContext } from "../../contexts/PostsContextProvider";
import TweetModal from "../tweetModal/TweetModal";
import "./CreatePost.css";
export default function CreatePost() {
  const { showCreatePostModal, setShowCreatePostModal } = usePostsContext();

  if (!showCreatePostModal) {
    return null;
  }
  return (
    <div class="create-post-modal">
      <div
        className="outside-click"
        onClick={() => setShowCreatePostModal(false)}
      ></div>
      <TweetModal />
    </div>
  );
}
