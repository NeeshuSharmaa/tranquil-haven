import "./Home.css";
import { posts } from "../../../backend/db/posts";
import Post from "../../components/post/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faPaperPlane,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../../contexts/AuthContextProvider";

export default function Home() {
  const { currentUser } = useAuthContext();

  return (
    <div className="home">
      <div className="tweet-container">
        <img
          src={currentUser.image}
          alt={currentUser.username}
          className="user-img"
        />
        <textarea placeholder="What's cooking in your head?" />
        <button>
          <span>Post </span>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
      {/* <div className="filter">
        <div className="active-filter">
          <FontAwesomeIcon icon={faFire} className="filter-icon"/>
          <span>Trending</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faSort} className="filter-icon"/>
          <span>Latest</span>
        </div>
      </div> */}

      <div className="posts-outer-container">
        {posts.map((post) => (
          <Post {...post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
