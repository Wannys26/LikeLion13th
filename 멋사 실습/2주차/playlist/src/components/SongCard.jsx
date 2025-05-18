import React from 'react';
import PropTypes from 'prop-types';

const SongCard = ({ albumImage, releaseDate, artist, title, lyricist, composer, onClick }) => {
  return(
    <section
      onClick={onClick}
      className="ph:w-60 ph:p-3 ph:m-3 ph:text-sm dt:w-70 dt:p-6 dt:m-5 dt:text-base cursor-pointer bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-md transition hover:scale-[1.02] hover:shadow-lg duration-300"
    >
      <img
        src={albumImage}
        alt={`${title} 앨범 커버`}
        className="w-full aspect-square object-cover"
      />
      <h2 className="text-lg font-semibold text-white truncate">{title}</h2>
      <hr className="my-4" />
      <p className="text-sm text-gray-300 mt-1">🎤 가수: {artist}</p>
      <p className="text-sm text-gray-400">📝 작사가: {lyricist}</p>
      <p className="text-sm text-gray-400">🎼 작곡가: {composer}</p>
      <p className="text-xs text-gray-500 mt-2">📅 발매일: {releaseDate}</p>
    </section>
  )
};

SongCard.propTypes = {
  albumImage: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lyricist: PropTypes.string.isRequired,
  composer: PropTypes.string.isRequired,
  onClick: PropTypes.func,  // 새로 추가됨
};

export default SongCard;