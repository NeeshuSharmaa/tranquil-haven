export const postsReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_ALL_POSTS": {
      const likedByUser = payload.posts.filter(({ likes: { likedBy } }) =>
        likedBy.includes(payload.currentUser.username)
      );

      return { ...state, posts: payload.posts, likedPosts: likedByUser };
    }
    case "SORT_BY_TRENDING": {
      return { ...state, sortBy: { latest: false, trending: true } };
    }
    case "SORT_BY_LATEST": {
      return { ...state, sortBy: { latest: true, trending: false } };
    }
    case "CREATE_NEW_POST": {
      return { ...state, posts: payload };
    }
    case "DELETE_POST": {
      return { ...state, posts: payload };
    }
    case "EDIT_POST": {
      return { ...state, posts: payload };
    }
    case "LIKE_POST": {
      const postToAdd = payload.posts.find(({ _id }) => _id === payload.id);
      return {
        ...state,
        posts: payload.posts,
        likedPosts: [...state.likedPosts, postToAdd],
      };
    }
    case "DISLIKE_POST": {
      const filteredLikedPosts = state.likedPosts.filter(
        ({ _id }) => _id !== payload.id
      );
      return {
        ...state,
        posts: payload.posts,
        likedPosts: filteredLikedPosts,
      };
    }
    case "ADD_TO_BOOKMARKS": {
      return {
        ...state,

        bookmarks: payload,
      };
    }
    case "REMOVE_FROM_BOOKMARKS": {
      return {
        ...state,

        bookmarks: payload,
      };
    }
    case "ADD_COMMENT": {
      return {};
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
