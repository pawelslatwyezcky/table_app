import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFilteredPosts, setPages } from '../redux/reducer';

export const useSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const search = (e) => {
    navigate('/1');
    dispatch(setFilteredPosts(e.target.value));
    dispatch(setPages());
  };

  return search;
};
