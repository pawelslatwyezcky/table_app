import { usePosts } from '../hooks/usePosts';
import { usePostsToDisplay } from '../hooks/usePostsToDisplay';
import { useSort } from '../hooks/useSort';

import TableRow from './TableRow';
import chevron from '../assets/chevron.svg';

const Table = () => {
  usePosts();
  const posts = usePostsToDisplay();
  const [sortedById, sortById] = useSort('id');
  const [sortedByTitle, sortByTitle] = useSort('title');
  const [sortedByBody, sortByBody] = useSort('body');

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table__heading table__heading-id" onClick={sortById}>
            ID
            <img
              src={chevron}
              className={`chevron  ${sortedById ? 'reversed' : ''}`}
              alt="Sort"
            />
          </th>
          <th
            className="table__heading table__heading-heading"
            onClick={sortByTitle}
          >
            Заголовок
            <img
              src={chevron}
              alt="Sort"
              className={`chevron  ${sortedByTitle ? 'reversed' : ''}`}
            />
          </th>
          <th
            className="table__heading table__heading-description"
            onClick={sortByBody}
          >
            Описание
            <img
              src={chevron}
              alt="Sort"
              className={`chevron  ${sortedByBody ? 'reversed' : ''}`}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <TableRow key={index} post={post} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
