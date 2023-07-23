import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Search from './components/Search';
import Table from './components/Table';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="app__container">
      <BrowserRouter>
        <Search />
        <Routes>
          <Route exact path="/:page" element={<Table />} />
          <Route path="*" element={<Navigate to="/1" replace />} />
        </Routes>
        <Pagination />
      </BrowserRouter>
    </div>
  );
}

export default App;
