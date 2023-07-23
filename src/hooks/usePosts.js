import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setPosts,
  setPostsToDisplay,
  setPages,
  setFilteredPosts,
} from '../redux/reducer';

export const usePosts = () => {
  const dispatch = useDispatch();

  const fetchPosts = useCallback(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    dispatch(setPosts(posts));
    dispatch(setFilteredPosts(''));
    dispatch(setPostsToDisplay());
    dispatch(setPages());
  }, [dispatch]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
};
