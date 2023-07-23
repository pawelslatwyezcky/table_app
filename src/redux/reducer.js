import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    postsToDisplay: [],
    filteredPosts: [],
    pages: 1,
    currentPage: 1,
  },
  reducers: {
    setPosts: (state, action) => ({
      ...state,
      posts: action.payload,
    }),
    setPages: (state) => ({
      ...state,
      pages: Math.ceil(state.filteredPosts.length / 10) || 1,
    }),
    setCurrentPage: (state, action) => ({
      ...state,
      currentPage: action.payload,
    }),
    setFilteredPosts: (state, action) => ({
      ...state,
      filteredPosts: state.posts.filter(
        (el) =>
          el.id.toString().includes(action.payload) ||
          el.title.includes(action.payload) ||
          el.body.includes(action.payload)
      ),
    }),
    setPostsToDisplay: (state) => ({
      ...state,
      postsToDisplay: state.filteredPosts.filter(
        (_, idx) =>
          idx > (state.currentPage - 1) * 10 - 1 && idx < state.currentPage * 10
      ),
    }),
    sortByAsc: (state, action) => ({
      ...state,
      filteredPosts: [...state.filteredPosts].sort(function compare(a, b) {
        if (a[action.payload] < b[action.payload]) {
          return -1;
        }
        if (a[action.payload] > b[action.payload]) {
          return 1;
        }
        return 0;
      }),
    }),
    sortByDesc: (state, action) => ({
      ...state,
      filteredPosts: [...state.filteredPosts].sort(function compare(a, b) {
        if (a[action.payload] > b[action.payload]) {
          return -1;
        }
        if (a[action.payload] < b[action.payload]) {
          return 1;
        }
        return 0;
      }),
    }),
  },
});

export const {
  setPosts,
  setPostsToDisplay,
  setPages,
  setCurrentPage,
  setFilteredPosts,
  sortByAsc,
  sortByDesc,
} = postsSlice.actions;

export default postsSlice.reducer;
