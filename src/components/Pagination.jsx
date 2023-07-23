import { Link } from 'react-router-dom';
import { usePagination } from '../hooks/usePagination';

const Pagination = () => {
  const { pages, currentPage, pageToggle } = usePagination();

  return (
    <div className="pagination">
      <button
        className="pagination__button pagination__button-prev"
        disabled={currentPage === 1}
        onClick={() => {
          pageToggle(currentPage - 1);
        }}
      >
        Назад
      </button>
      <div>
        {pages.map((el) => (
          <Link
            className={`page__button ${
              el === currentPage ? 'page__active' : ''
            }`}
            key={el}
            to={`/${el}`}
          >
            {el}
          </Link>
        ))}
      </div>
      <button
        className="pagination__button pagination__button-prev"
        disabled={currentPage === pages.length}
        onClick={() => {
          pageToggle(currentPage + 1);
        }}
      >
        Вперед
      </button>
    </div>
  );
};

export default Pagination;
