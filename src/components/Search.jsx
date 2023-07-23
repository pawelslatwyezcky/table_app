import { useRef } from 'react';

import { useSearch } from '../hooks/useSearch';
import searchIcon from '../assets/search-svgrepo-com 1.svg';

const Search = () => {
  const search = useSearch();
  const input = useRef(null);

  return (
    <div className="search" onClick={() => input?.current?.focus()}>
      <input
        className="search__input"
        ref={input}
        onChange={(e) => search(e)}
        placeholder="Поиск"
      />
      <img className="search__icon" src={searchIcon} alt="search" />
    </div>
  );
};

export default Search;
