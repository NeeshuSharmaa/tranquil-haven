import {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { postsReducer } from "../reducers/PostsReducer";
import { fetchPosts } from "../services/PostServices";
import { useAuthContext } from "./AuthContextProvider";

const PostsContext = createContext();

export const usePostsContext = () => useContext(PostsContext);

export default function PostsContextProvider({ children }) {
  const [showEditPostModal, setShowEditPostModal] = useState(false);
  const [editPost, setEditPost] = useState(null);

  const { currentUser } = useAuthContext();

  const initialState = {
    posts: [],
    userPosts: [],
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

  useEffect(() => {
    if (currentUser) {
      fetchPosts(dispatch, currentUser);
    }
  }, []);

  return (
    <PostsContext.Provider value={values}>{children}</PostsContext.Provider>
  );
}
