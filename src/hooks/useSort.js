import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPostsToDisplay, sortByAsc, sortByDesc } from '../redux/reducer';

export const useSort = (value) => {
  const dispatch = useDispatch();
  const [sortedByValue, setSortedByValue] = useState(false);

  function onClick() {
    setSortedByValue((prev) => !prev);
    if (sortedByValue) {
      dispatch(sortByAsc(value));
    } else {
      dispatch(sortByDesc(value));
    }
    dispatch(setPostsToDisplay());
  }

  return [sortedByValue, onClick];
};
