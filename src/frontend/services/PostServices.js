import axios from "axios";

export const fetchPosts = async (dispatch) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.get("/api/posts");
    if (status === 200) {
      dispatch({ type: "SET_ALL_POSTS", payload: posts });
    }
  } catch (e) {
    console.log(e);
  }
};
