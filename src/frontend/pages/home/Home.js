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
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createPost, fetchPosts } from "../../services/PostServices";

export default function Home() {
  const { currentUser, encodedToken } = useAuthContext();
  const {
    postsState: {
      posts,
      sortBy: { latest, trending },
    },
    dispatch,
  } = usePostsContext();

  const [post, setPost] = useState("");

  let postsToDisplay;

  if (latest) {
    const sortedPosts = [...posts].sort(
      (postA, postB) =>
        new Date(postB.createdAt.unformatted) -
        new Date(postA.createdAt.unformatted)
    );

    postsToDisplay = sortedPosts;
  } else if (trending) {
    const sortedPosts = [...posts].sort(
      (postA, postB) => postB.likes.likeCount - postA.likes.likeCount
    );
    postsToDisplay = sortedPosts;
  } else {
    postsToDisplay = posts;
  }

  useEffect(() => {
    if (currentUser) {
      fetchPosts(dispatch, currentUser);
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  }, []);

  return (
    <div className="home">
      <h2 className="head">Home</h2>
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

      {postsToDisplay.length ? (
        <div className="posts-outer-container">
          {postsToDisplay?.map((post) => (
            <Post {...post} key={post._id} />
          ))}
        </div>
      ) : (
        <div className="empty-posts-container">There are no posts to show!</div>
      )}
    </div>
  );
}
