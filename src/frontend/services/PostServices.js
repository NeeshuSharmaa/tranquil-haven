import axios from "axios";

export const fetchPosts = async (dispatch, currentUser) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.get("/api/posts");
    if (status === 200) {
      dispatch({ type: "SET_ALL_POSTS", payload: { posts, currentUser } });
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  } catch (e) {
    console.log(e);
  }
};

export const createPost = async (
  postContent,
  dispatch,
  authorization,
  toast
) => {
  try {
    const {
      data: { posts },
    } = await axios.post(
      "/api/posts",
      { postData: { content: postContent } },
      {
        headers: {
          authorization,
        },
      }
    );

    dispatch({ type: "CREATE_NEW_POST", payload: posts });
    localStorage.setItem("posts", JSON.stringify(posts));
    toast.success("Post got added!", {
      className: "toast-message",
    });
  } catch (e) {
    console.log(e);
  }
};
export const deletePost = async (id, dispatch, authorization, toast) => {
  try {
    const {
      data: { posts },
    } = await axios.delete(
      `/api/posts/${id}`,

      {
        headers: {
          authorization,
        },
      }
    );

    dispatch({ type: "DELETE_POST", payload: posts });
    localStorage.setItem("posts", JSON.stringify(posts));
    toast.success("Post got deleted!", {
      className: "toast-message",
    });
  } catch (e) {
    console.log(e);
    toast.error("delete post service error", { className: "toast-message" });
  }
};

export const editPostHandler = async (
  editPost,
  dispatch,
  authorization,
  toast,
  setShowEditPostModal
) => {
  try {
    const {
      data: { posts },
    } = await axios.post(
      `/api/posts/edit/${editPost.id}`,
      { postData: { content: editPost.content } },

      {
        headers: {
          authorization,
        },
      }
    );

    dispatch({ type: "EDIT_POST", payload: posts });
    localStorage.setItem("posts", JSON.stringify(posts));
    setShowEditPostModal(false);
    toast.success("Post got edited!", {
      className: "toast-message",
    });
  } catch (e) {
    console.log(e);
    toast.error("edit post service error", { className: "toast-message" });
  }
};
export const likePost = async (id, dispatch, authorization, toast) => {
  try {
    const {
      data: { posts },
    } = await axios.post(
      `/api/posts/like/${id}`,
      {},

      {
        headers: {
          authorization,
        },
      }
    );

    dispatch({ type: "LIKE_POST", payload: { posts, id } });
    localStorage.setItem("posts", JSON.stringify(posts));
    toast.success("Post liked!", {
      className: "toast-message",
    });
  } catch (e) {
    console.log(e);
    toast.error("like post service error", { className: "toast-message" });
  }
};
export const dislikePost = async (id, dispatch, authorization, toast) => {
  try {
    const {
      data: { posts },
    } = await axios.post(
      `/api/posts/dislike/${id}`,
      {},

      {
        headers: {
          authorization,
        },
      }
    );

    dispatch({ type: "DISLIKE_POST", payload: { posts, id } });
    localStorage.setItem("posts", JSON.stringify(posts));

    toast.success("Post disliked", {
      className: "toast-message",
    });
  } catch (e) {
    console.log(e);
    toast.error("dislike post service error", { className: "toast-message" });
  }
};
export const addToBookmarks = async (id, dispatch, authorization, toast) => {
  try {
    const {
      data: { bookmarks },
    } = await axios.post(
      `/api/users/bookmark/${id}`,
      {},

      {
        headers: {
          authorization,
        },
      }
    );

    dispatch({ type: "ADD_TO_BOOKMARKS", payload: bookmarks });

    toast.success("Post added to bookmarks", {
      className: "toast-message",
    });
  } catch (e) {
    console.log(e);
    toast.error("bookmark service error", { className: "toast-message" });
  }
};
export const removeFromBookmarks = async (
  id,
  dispatch,
  authorization,
  toast
) => {
  try {
    const {
      data: { bookmarks },
    } = await axios.post(
      `/api/users/remove-bookmark/${id}`,
      {},

      {
        headers: {
          authorization,
        },
      }
    );

    dispatch({ type: "REMOVE_FROM_BOOKMARKS", payload: bookmarks });

    toast.success("Post removed from bookmarks", {
      className: "toast-message",
    });
  } catch (e) {
    console.log(e);
    toast.error("delete post service error", { className: "toast-message" });
  }
};
