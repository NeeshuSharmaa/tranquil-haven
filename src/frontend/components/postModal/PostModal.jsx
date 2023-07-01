import { toast } from "react-toastify";
import { useAuthContext } from "../../contexts/AuthContextProvider";
import { usePostsContext } from "../../contexts/PostsContextProvider";
import "./PostModal.css";
import { editPostHandler } from "../../services/PostServices";

export default function PostModal() {
  const {
    showEditPostModal,
    setShowEditPostModal,
    editPost,
    setEditPost,
    dispatch,
  } = usePostsContext();
  const { encodedToken } = useAuthContext();

  if (!showEditPostModal) {
    return null;
  }

  return (
    <div className="modal">
      <div className="model-content">
        <div className="modal-header">
          <h3>Edit Post</h3>
        </div>
        <div className="modal-body">
          <textarea
            value={editPost.content}
            onChange={(e) =>
              setEditPost((prev) => ({ ...prev, content: e.target.value }))
            }
          />
        </div>
        <div className="modal-footer">
          <span
            onClick={() =>
              editPostHandler(
                editPost,
                dispatch,
                encodedToken,
                toast,
                setShowEditPostModal
              )
            }
          >
            Save
          </span>
          <span onClick={() => setShowEditPostModal(false)}>Cancel</span>
        </div>
      </div>
    </div>
  );
}
