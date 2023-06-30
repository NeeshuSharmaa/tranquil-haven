import axios from "axios";
import { useContext, createContext, useReducer, useEffect } from "react";
import { postsReducer } from "../reducers/PostsReducer";
import { fetchPosts } from "../services/PostServices";

const PostsContext = createContext();

export const usePostsContext = () => useContext(PostsContext);

export default function PostsContextProvider({ children }) {
  const initialState = {
    posts: [],
    bookmarks: [],
    likedPosts: [],
    sortBy: { latest: false, trending: false },
  };
  const [postsState, dispatch] = useReducer(postsReducer, initialState);

  const values = {
    postsState,
    dispatch,
  };

  useEffect(() => {
    fetchPosts(dispatch);
  }, []);

  return (
    <PostsContext.Provider value={values}>{children}</PostsContext.Provider>
  );
}
