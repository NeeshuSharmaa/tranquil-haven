import "./Home.css";
import Post from "../../components/post/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpShortWide,
  faArrowUpWideShort,
  faFire,
  faPaperPlane,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { usePostsContext } from "../../contexts/PostsContextProvider";
import { useEffect } from "react";

import { fetchPosts } from "../../services/PostServices";
import TweetModal from "../../components/tweetModal/TweetModal";

export default function Home() {
  const { currentUser } = useAuthContext();
  const {
    postsState: {
      posts,
      sortBy: { latest, trending, oldest },
    },
    dispatch,
  } = usePostsContext();

  const postsForHome = posts?.filter(
    ({ username }) =>
      username === currentUser?.username ||
      currentUser.following.some(
        ({ username: USERNAME }) => username === USERNAME
      )
  );

  let postsToDisplay;

  if (latest) {
    const sortedPosts = [...posts].sort(
      (postA, postB) =>
        new Date(postB.createdAt.unformatted) -
        new Date(postA.createdAt.unformatted)
    );

    postsToDisplay = sortedPosts;
  } else if (trending) {
    const sortedPosts = [...postsForHome].sort(
      (postA, postB) => postB.likes.likeCount - postA.likes.likeCount
    );
    postsToDisplay = sortedPosts;
  } else if (oldest) {
    const sortedPosts = [...postsForHome].sort(
      (postA, postB) =>
        new Date(postA.createdAt.unformatted) -
        new Date(postB.createdAt.unformatted)
    );

    postsToDisplay = sortedPosts;
  } else {
    postsToDisplay = postsForHome;
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
      <TweetModal />

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
          <FontAwesomeIcon icon={faArrowUpWideShort} className="filter-icon" />
          <span>Latest</span>
        </div>
        <div
          className={oldest ? "active-filter" : ""}
          onClick={() => dispatch({ type: "SORT_BY_OLDEST" })}
        >
          <FontAwesomeIcon icon={faArrowUpShortWide} className="filter-icon" />
          <span> Oldest</span>
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
