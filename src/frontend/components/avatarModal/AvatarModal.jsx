import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AvatarModal.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function AvatarModal({
  setShowChangeImage,
  setEditProfileInput,
}) {
  const setAvatar = (e) => {
    setEditProfileInput((prev) => ({ ...prev, image: e.target.src }));
    setShowChangeImage((prev) => ({
      ...prev,
      avatar: false,
      outer: false,
    }));
  };
  return (
    <div className="choose-avatar">
      <FontAwesomeIcon
        icon={faXmark}
        className="xmark"
        onClick={() =>
          setShowChangeImage((prev) => ({ ...prev, avatar: false }))
        }
      />
      <div className="avatars">
        <img
          src="/assets/images/default-avatar.jpg"
          alt="default-avatar"
          onClick={setAvatar}
        />
        <img src="/assets/images/av-1.jpg" alt="avatar-1" onClick={setAvatar} />
        <img src="/assets/images/av-2.jpg" alt="avatar-2" onClick={setAvatar} />

        <img src="/assets/images/av-4.jpg" alt="avatar-4" onClick={setAvatar} />
        <img src="/assets/images/av-5.jpg" alt="avatar-5" onClick={setAvatar} />
        <img src="/assets/images/av-6.jpg" alt="avatar-6" onClick={setAvatar} />
        <img src="/assets/images/av-7.jpg" alt="avatar-7" onClick={setAvatar} />
        <img src="/assets/images/av-8.jpg" alt="avatar-8" onClick={setAvatar} />
      </div>
    </div>
  );
}
