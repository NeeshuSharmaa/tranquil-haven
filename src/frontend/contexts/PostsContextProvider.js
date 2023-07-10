import {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { postsReducer } from "../reducers/PostsReducer";
import { useAuthContext } from "./AuthContextProvider";
import { fetchPosts } from "../services/PostServices";

const PostsContext = createContext();

export const usePostsContext = () => useContext(PostsContext);

export default function PostsContextProvider({ children }) {
  const [showEditPostModal, setShowEditPostModal] = useState(false);
  const [editPost, setEditPost] = useState(null);

  const { currentUser } = useAuthContext();

  const postsData = JSON.parse(localStorage.getItem("posts"));

  const initialState = {
    posts: postsData || [],
    bookmarks: [],
    likedPosts: [],
    sortBy: { latest: false, trending: false },
  };
  const [postsState, dispatch] = useReducer(postsReducer, initialState);

  const values = {
    postsState,
    dispatch,
    editPost,
    setEditPost,
    showEditPostModal,
    setShowEditPostModal,
  };

  return (
    <PostsContext.Provider value={values}>{children}</PostsContext.Provider>
  );
}
