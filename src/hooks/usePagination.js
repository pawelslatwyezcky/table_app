import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setCurrentPage, setPostsToDisplay } from '../redux/reducer';
import { useEffect } from 'react';

export const usePagination = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const pagesCount = useSelector((state) => state.posts.pages);

  useEffect(() => {
    let page = parseInt(location.pathname.replace('/', ''));
    if (page < 0 || page > 10 || Number.isNaN(page)) {
      navigate('/1');
    }
    dispatch(setCurrentPage(page));
    dispatch(setPostsToDisplay());
  }, [location, dispatch, navigate]);

  const currentPage = useSelector((state) => state.posts.currentPage);
  const pages = new Array(pagesCount).fill(0).map((_, idx) => idx + 1);

  const pageToggle = (val) => {
    navigate(`/${val}`);
  };

  return { pages, currentPage, pageToggle };
};
