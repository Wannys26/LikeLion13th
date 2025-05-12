import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await res.json();
        setShow(data);
      } catch (err) {
        console.error('Error fetching show detail:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchShow();
  }, [id]);

  if (loading) return <div className="text-center mt-10 text-white">로딩 중...</div>;
  if (!show) return <div className="text-center mt-10 text-red-400">프로그램 정보를 불러올 수 없습니다.</div>;

  return (
<div className="min-h-screen bg-gray-900 text-white px-6 py-10 max-w-4xl mx-auto">
  <h1 className="text-4xl font-bold mb-6 text-center">{show.name}</h1>
  <div className="flex flex-col md:flex-row gap-8">
    <img
      src={show.image?.original || 'https://via.placeholder.com/300x450?text=No+Image'}
      alt={show.name}
      className="w-full md:w-72 object-cover rounded-lg shadow-md"
    />
    <div className="flex-1 space-y-4">
      <p><span className="font-semibold text-blue-300">장르:</span> {show.genres.join(', ')}</p>
      <p><span className="font-semibold text-blue-300">언어:</span> {show.language}</p>
      <p><span className="font-semibold text-blue-300">상태:</span> {show.status}</p>
      <p><span className="font-semibold text-blue-300">평점:</span> {show.rating?.average || 'N/A'}</p>
      <div>
        <span className="font-semibold text-blue-300">소개:</span>
        <div dangerouslySetInnerHTML={{ __html: show.summary }} className="mt-2 text-gray-300" />
      </div>
    </div>
  </div>
</div>

  );
};

export default ShowDetail;