import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { usePostsContext } from "../../contexts/PostsContextProvider";
import { createPost } from "../../services/PostServices";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./TweetModal.css";

export default function TweetModal() {
  const { currentUser, encodedToken } = useAuthContext();
  const { dispatch, setShowCreatePostModal } = usePostsContext();
  const [post, setPost] = useState("");
  return (
    <div className="tweet-container">
      <img
        src={currentUser.image}
        alt={currentUser.username}
        className="user-img"
      />
      <textarea
        value={post}
        placeholder="What's cooking in your head?"
        onChange={(e) => setPost(e.target.value)}
      />
      <button
        onClick={() => {
          createPost(post, dispatch, encodedToken, toast);
          setPost("");
          setShowCreatePostModal(false);
        }}
      >
        <span>Post </span>
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
}
