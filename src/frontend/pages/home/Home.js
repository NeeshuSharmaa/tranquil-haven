import "./Home.css";
import Post from "../../components/post/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faPaperPlane,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { usePostsContext } from "../../contexts/PostsContextProvider";
import { useState } from "react";
import { toast } from "react-toastify";
import { createPost } from "../../services/PostServices";

export default function Home() {
  const { currentUser, encodedToken } = useAuthContext();
  const {
    postsByUser,
    postsState: {
      sortBy: { latest, trending },
    },
    dispatch,
  } = usePostsContext();

  const [post, setPost] = useState("");

  let postsToDisplay;

  if (latest) {
    const sortedPosts = [...postsByUser].sort(
      (postA, postB) =>
        new Date(postB.createdAt.unformatted) -
        new Date(postA.createdAt.unformatted)
    );

    postsToDisplay = sortedPosts;
  } else if (trending) {
    const sortedPosts = [...postsByUser].sort(
      (postA, postB) => postB.likes.likeCount - postA.likes.likeCount
    );
    postsToDisplay = sortedPosts;
  } else {
    postsToDisplay = postsByUser;
  }

  return (
    <div className="home">
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
          }}
        >
          <span>Post </span>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
      <div className="filter">
        <div
          className={trending ? "active-filter" : ""}
          onClick={() => dispatch({ type: "SORT_BY_TRENDING" })}
        >
          <FontAwesomeIcon icon={faFire} className="filter-icon" />
          <span>Trending</span>
        </div>
        <div
          className={latest ? "active-filter" : ""}
          onClick={() => dispatch({ type: "SORT_BY_LATEST" })}
        >
          <FontAwesomeIcon icon={faSort} className="filter-icon" />
          <span>Latest</span>
        </div>
      </div>

      <div className="posts-outer-container">
        {postsToDisplay?.map((post) => (
          <Post {...post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
