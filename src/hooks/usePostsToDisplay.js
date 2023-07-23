import { useSelector } from 'react-redux';

export const usePostsToDisplay = () => {
  const postsToDisplay = useSelector((state) => state.posts.postsToDisplay);
  const length = 10 - postsToDisplay.length;
  const posts = [...postsToDisplay].concat(
    ...new Array(length).fill({ id: '', body: '', title: '' })
  );
  return posts;
};
