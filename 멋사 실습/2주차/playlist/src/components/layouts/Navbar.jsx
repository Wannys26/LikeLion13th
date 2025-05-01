import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-black/70 backdrop-blur-md border-b border-white/10 text-white flex items-center justify-between px-10 z-50">
      <div className="space-x-10 flex items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight text-white">
          <span className="text-pink-400">
          Playlist 🎧
          </span>
        </Link>
        <Link to="/top100" className="text-gray-300 hover:text-white">Top 100</Link>
        <Link to="/mypage" className="text-gray-300 hover:text-white">My Page</Link>
      </div>
      <Link to="/login" className="text-gray-300 hover:text-white font-medium">Login</Link>
    </nav>
  );
};
