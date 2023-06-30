export const postsReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_ALL_POSTS": {
      return { ...state, posts: payload };
    }
    case "SORT_BY_TRENDING": {
      return { ...state, sortBy: { latest: false, trending: true } };
    }
    case "SORT_BY_LATEST": {
      return { ...state, sortBy: { latest: true, trending: false } };
    }
    default: {
      return {
        posts: [],
        bookmarks: [],
        likedPosts: [],
        sortBy: { latest: false, trending: false },
      };
    }
  }
};
