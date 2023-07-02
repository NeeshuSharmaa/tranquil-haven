import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import "./EditProfileModal.css";
import { faImage, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function EditProfileModal() {
  const { showEditProfileModal, setShowEditProfileModal, currentUser } =
    useAuthContext();
  const [showChangeImage, setShowChangeImage] = useState(false);
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
                src={currentUser.image}
                className="profile-image"
                alt="profile"
              />
              <div
                className="change-img"
                onClick={() => setShowChangeImage(true)}
              >
                <FontAwesomeIcon icon={faImage} className="change-img-icon" />
              </div>
              {showChangeImage && (
                <div className="change-img-option">
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="xMark"
                    onClick={() => setShowChangeImage(false)}
                  />
                  <span>Choose Image</span>

                  <span>Choose Avatar</span>
                </div>
              )}
            </div>
          </div>

          <div className="name">
            <div>
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" />
            </div>
            <div>
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" />
            </div>
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="bio">bio</label>
            <input type="text" id="bio" />
          </div>
          <div>
            <label htmlFor="website">Website Link</label>
            <input type="text" id="website" />
          </div>
        </div>
        <div className="modal-footer">
          <span className="save">Save</span>
          <span> | </span>
          <span onClick={() => setShowEditProfileModal(false)}>Cancel</span>
        </div>
      </div>
    </div>
  );
}
