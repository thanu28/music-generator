import React from 'react';

function MusicResult({ musicUrl }) {
  return (
    <div className="music-result">
      <h2>Your Generated Music 🎧</h2>
      <audio controls src={musicUrl} />
      <br />
      <a href={musicUrl} download>
        <button>⬇️ Download</button>
      </a>
    </div>
  );
}

export default MusicResult;
