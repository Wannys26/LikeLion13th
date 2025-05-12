// components/SearchBar.jsx
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
<form onSubmit={handleSubmit} className="flex justify-center mt-10">
  <input
  type="text"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  placeholder="🔍 프로그램명을 검색하세요"
  className="w-72 md:w-96 px-4 py-2 
             bg-white text-black 
             rounded-l-lg border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

  <button
    type="submit"
    className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
  >
    검색
  </button>
</form>

  );
};

export default SearchBar;
