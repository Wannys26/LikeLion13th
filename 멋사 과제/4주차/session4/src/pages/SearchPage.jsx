import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ShowCard from '../components/ShowCard';

const RECENT_KEY = 'recent_keywords';

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recentKeywords, setRecentKeywords] = useState([]);

  // 로컬스토리지에서 최근 검색어 불러오기
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(RECENT_KEY)) || [];
    setRecentKeywords(stored);
  }, []);

  // 검색
  const fetchShows = async (query) => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data.map((item) => item.show));
      updateRecentKeywords(query);
    } catch (error) {
      console.error('Error fetching shows:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  //최근 검색어 업데이트
  const updateRecentKeywords = (newKeyword) => {
    let updated = [newKeyword, ...recentKeywords.filter(k => k !== newKeyword)];
    if (updated.length > 5) updated = updated.slice(0, 5);
    setRecentKeywords(updated);
    localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-3xl font-bold text-center pt-10 mb-4 text-red-800">🦁LionFlix🦁</h1>

      {/* 최근 검색어 리스트 */}
      {recentKeywords.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {recentKeywords.map((word, i) => (
            <button
              key={i}
              onClick={() => fetchShows(word)}
              className="px-3 py-1 bg-gray-700 hover:bg-blue-600 rounded-full text-sm"
            >
              #{word}
            </button>
          ))}
        </div>
      )}

      <SearchBar onSearch={fetchShows} />

      {loading ? (
        <p className="text-center mt-10 text-blue-300">로딩 중...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
          {results.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
