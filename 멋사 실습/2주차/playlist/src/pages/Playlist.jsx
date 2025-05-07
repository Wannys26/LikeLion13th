import React, { useState } from 'react';
import SongCard from '../components/SongCard';
import Modal from '../components/Modal';
import songData from '../data/song.json';

export const Playlist = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setSelectedImage(null);

  return (
    <>
      <main className="max-w-screen-xl mx-auto p-6 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {songData.map((song, index) => (
          <SongCard
            key={index}
            {...song}
            onClick={() => setSelectedImage(song.albumImage)}
          />
        ))}
      </main>
      {selectedImage && <Modal image={selectedImage} onClose={handleClose} />}
    </>
  );
};

export default Playlist;