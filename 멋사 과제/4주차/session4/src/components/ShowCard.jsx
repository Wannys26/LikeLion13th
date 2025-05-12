// components/ShowCard.jsx
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {
  const { id, name, genres, image } = show;

  return (
<Link
  to={`/shows/${id}`}
  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300"
>
  <img
    src={image?.medium || 'https://via.placeholder.com/210x295?text=No+Image'}
    alt={name}
    className="w-full h-72 object-cover"
  />
  <div className="p-4">
    <h2 className="text-lg font-bold text-white truncate">{name}</h2>
    <div className="mt-2 flex flex-wrap gap-1">
      {genres.map((genre) => (
        <span key={genre} className="text-sm text-blue-300 bg-blue-800 bg-opacity-20 px-2 py-0.5 rounded">
          #{genre}
        </span>
      ))}
    </div>
  </div>
</Link>


  );
};

export default ShowCard;
