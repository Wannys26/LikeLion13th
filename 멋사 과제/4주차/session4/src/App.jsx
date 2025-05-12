import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import ShowDetail from './pages/ShowDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/shows/:id" element={<ShowDetail />} />
    </Routes>
  );
};

export default App;
