import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import "./EditProfileModal.css";
import { faImage, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faUpload,
  faUserCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { usePostsContext } from "../../contexts/PostsContextProvider";
import AvatarModal from "../avatarModal/AvatarModal";

export default function EditProfileModal() {
  const {
    showEditProfileModal,
    setShowEditProfileModal,
    currentUser,
    setCurrentUser,
    setUsers,
  } = useAuthContext();
  const {
    postsState: { posts },
    dispatch,
  } = usePostsContext();
  const [showChangeImage, setShowChangeImage] = useState({
    outer: false,
    avatar: false,
  });
  const [editProfileInput, setEditProfileInput] = useState({
    image: currentUser?.image,
    firstName: currentUser?.firstName,
    lastName: currentUser?.lastName,
    username: currentUser?.username,
    bio: "",
    website: "",
  });

  const imageRef = useRef();

  const chooseImageHandler = () => {
    imageRef.current.click();
    setShowChangeImage((prev) => ({ ...prev, outer: false }));
  };
  const editProfileHandler = () => {
    const updatedPosts = posts.map((post) =>
      post.username === currentUser.username
        ? { ...post, username: editProfileInput.username }
        : post
    );
    dispatch({
      type: "UPDATE_POSTS",
      payload: {
        posts: updatedPosts,
        username: editProfileInput.username,
      },
    });

    setCurrentUser((prev) => ({
      ...prev,
      ...editProfileInput,
    }));
    setUsers((prev) =>
      prev.map((user) =>
        user._id === currentUser._id ? { ...user, ...editProfileInput } : user
      )
    );

    localStorage.setItem("user", JSON.stringify(currentUser));
    setShowEditProfileModal(false);
    toast.success("Profile updated successfully", {
      className: "toast-message",
    });
  };

  if (!showEditProfileModal) {
    return null;
  }
  return (
    <div className="edit-profile-modal">
      <div className="modal-main">
        <h3>Edit Profile</h3>
        <div className="modal-body">
          <div className="profile-image-outer">
            <div className="profile-image-inner">
              <img
                src={editProfileInput.image}
                className="profile-image"
                alt="profile"
              />
              <input
                type="file"
                ref={imageRef}
                onChange={(e) =>
                  setEditProfileInput((prev) => ({
                    ...prev,
                    image: URL.createObjectURL(e.target.files[0]),
                  }))
                }
              />
              <div
                className="change-img"
                onClick={() =>
                  setShowChangeImage((prev) => ({ ...prev, outer: true }))
                }
              >
                <FontAwesomeIcon icon={faImage} className="change-img-icon" />
              </div>
              {showChangeImage.outer && (
                <div className="change-img-option">
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="xMark"
                    onClick={() =>
                      setShowChangeImage((prev) => ({ ...prev, outer: false }))
                    }
                  />
                  <span onClick={chooseImageHandler}>
                    <FontAwesomeIcon icon={faUpload} className="icon" /> Upload
                  </span>

                  <span
                    onClick={() =>
                      setShowChangeImage((prev) => ({
                        ...prev,
                        avatar: true,
                      }))
                    }
                  >
                    <FontAwesomeIcon icon={faUserCircle} className="icon" />
                    Choose Avatar
                  </span>
                </div>
              )}
              {showChangeImage.avatar && (
                <AvatarModal
                  setShowChangeImage={setShowChangeImage}
                  setEditProfileInput={setEditProfileInput}
                />
              )}
            </div>
          </div>

          <div className="name">
            <div>
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                value={editProfileInput.firstName}
                onChange={(e) =>
                  setEditProfileInput((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                value={editProfileInput.lastName}
                onChange={(e) =>
                  setEditProfileInput((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={editProfileInput.username}
              onChange={(e) =>
                setEditProfileInput((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <label htmlFor="bio">bio</label>
            <input
              type="text"
              id="bio"
              value={editProfileInput.bio}
              onChange={(e) =>
                setEditProfileInput((prev) => ({
                  ...prev,
                  bio: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <label htmlFor="website">Website Link</label>
            <input
              type="text"
              id="website"
              value={editProfileInput.website}
              onChange={(e) =>
                setEditProfileInput((prev) => ({
                  ...prev,
                  website: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="modal-footer">
          <span className="save" onClick={editProfileHandler}>
            Save
          </span>
          <span> | </span>
          <span
            onClick={() => {
              setShowEditProfileModal(false);
              setEditProfileInput((prev) => ({
                image: currentUser?.image,
                firstName: currentUser?.firstName,
                lastName: currentUser?.lastName,
                username: currentUser?.username,
                bio: "",
                website: "",
              }));
            }}
          >
            Cancel
          </span>
        </div>
      </div>
    </div>
  );
}
