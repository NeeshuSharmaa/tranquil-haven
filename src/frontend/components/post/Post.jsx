import {
  faBookmark,
  faComment,
  faEllipsisVertical,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Post.css";
import { useAuthContext } from "../../contexts/AuthContextProvider";

export default function Post({
  _id,
  content,
  likes,
  username,
  createdAt,
  updatedAt,
  image,
}) {
  const { users, getUserDetails } = useAuthContext();

  const { name, userImg } = getUserDetails(username);

  // const getPostDateTime = (updatedAt) => {
  //   const date = new Date(updatedAt).getDate();
  //   const month = new Date(updatedAt).getMonth();
  //   const year = new Date(updatedAt).getFullYear();
  //   const hours = new Date(updatedAt).getHours();
  //   const minutes = new Date(updatedAt).getMinutes();
  //   return `${date}/${month}/${year} ${hours}:${minutes}`;
  // };

  return (
    <div className="post-outer-container">
      <div className="post-head">
        <div className="post-head-left">
          <img src={userImg} alt="user" className="user-img" />
          <div className="post-user-info">
            <div>
              <span>{name}</span>
              <span className="grey-color">@{username}</span>
            </div>

            <span className="grey-color">{updatedAt}</span>
          </div>
        </div>

        <FontAwesomeIcon className="grey-color" icon={faEllipsisVertical} />
      </div>
      <div className="post-content">
        <p>{content}</p>
        {image && <img src={image} alt="post" />}
      </div>
      <div className="post-actions">
        <FontAwesomeIcon icon={faComment} className="fa-icons" />

        <div className="post-likes">
          <FontAwesomeIcon icon={faHeart} className="fa-icons" />
          {likes.likeCount}
        </div>

        <FontAwesomeIcon icon={faBookmark} className="fa-icons" />
      </div>
    </div>
  );
}
