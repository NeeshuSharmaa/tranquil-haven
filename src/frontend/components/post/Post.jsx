import {
  faBookmark,
  faComment,
  faEllipsisVertical,
  faHeart,
  faPenToSquare,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Post.css";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { usePostsContext } from "../../contexts/PostsContextProvider.js";
import {
  addToBookmarks,
  deletePost,
  dislikePost,
  likePost,
  removeFromBookmarks,
} from "../../services/PostServices.js";

import { toast } from "react-toastify";
import { useState } from "react";

export default function Post({
  _id,
  content,
  likes,
  username,
  createdAt,
  updatedAt,
  image,
}) {
  const { currentUser, getUserDetails, encodedToken } = useAuthContext();
  const { postsState, dispatch, setShowEditPostModal, setEditPost } =
    usePostsContext();

  const { name, userImg } = getUserDetails(username);

  const getDateAndTime = (createdAt) => createdAt.formatted.replace("at", " ");

  const [showEllipsisActions, setShowEllipsisAction] = useState(false);

  const editHandler = () => {
    setShowEllipsisAction(false);
    setShowEditPostModal(true);
    setEditPost({ id: _id, content });
  };

  const inLikedPosts = postsState.likedPosts.find(({ _id: id }) => id === _id);
  const inBookmarks = postsState.bookmarks.find(({ _id: id }) => id === _id);
  const isUserPost = currentUser.username === username;
  const isInFollowing = currentUser.following.includes(username);

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

            <span className="grey-color">{getDateAndTime(createdAt)}</span>
          </div>
        </div>

        {isUserPost && (
          <>
            {!showEllipsisActions && (
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                className="grey-color"
                icon={faEllipsisVertical}
                onClick={() => setShowEllipsisAction(true)}
              />
            )}
            {showEllipsisActions && (
              <div className="ellipsis-container">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="fa-icons"
                  onClick={() => setShowEllipsisAction(false)}
                />
                <div>
                  <div onClick={editHandler}>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="ellipsis-action-icons"
                    />
                    <p>Edit</p>
                  </div>
                  <div
                    onClick={() =>
                      deletePost(_id, dispatch, encodedToken, toast)
                    }
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="ellipsis-action-icons"
                    />
                    <p>Delete</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        {!isUserPost && (
          <button className={isInFollowing ? "unfollow" : "follow"}>
            {isInFollowing ? "Unfollow" : "Follow"}
          </button>
        )}
      </div>
      <div className="post-content">
        <p>{content}</p>
        {image && <img src={image} alt="post" />}
      </div>
      <div className="post-actions">
        <FontAwesomeIcon icon={faComment} className="fa-icons" />

        <div className="post-likes">
          <FontAwesomeIcon
            style={{ color: inLikedPosts ? "#e11d48" : "inherit" }}
            icon={faHeart}
            className="fa-icons"
            onClick={() =>
              inLikedPosts
                ? dislikePost(_id, dispatch, encodedToken, toast)
                : likePost(_id, dispatch, encodedToken, toast)
            }
          />
          {likes.likeCount}
        </div>

        <FontAwesomeIcon
          style={{ color: inBookmarks ? "cornflowerblue" : "inherit" }}
          icon={faBookmark}
          className="fa-icons"
          onClick={() =>
            inBookmarks
              ? removeFromBookmarks(_id, dispatch, encodedToken, toast)
              : addToBookmarks(_id, dispatch, encodedToken, toast)
          }
        />
      </div>
    </div>
  );
}
