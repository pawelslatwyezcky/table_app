import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../redux/reducer';

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
