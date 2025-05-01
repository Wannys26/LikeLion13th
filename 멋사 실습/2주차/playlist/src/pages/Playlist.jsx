import React from 'react';
import SongCard from '../components/SongCard';
import songData from '../data/song.json';

export const Playlist = () => {

  return (
    <main className="max-w-screen-xl mx-auto p-6 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {songData.map((song, index) => (
        <SongCard key={index} {...song} />
      ))}
    </main>
  );
};
