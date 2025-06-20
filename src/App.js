// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [musicUrl, setMusicUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
    setMusicUrl('');
  };

  const handleGenerate = async () => {
    if (!image) {
      alert('Please upload an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/generate-music', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        // 💡 Make sure to include full URL path
        setMusicUrl(`http://localhost:5000/uploads/sample-music.mp3}`);
      } else {
        alert(data.error || 'Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="music-icon"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`
          }}
        ></div>
      ))}

      <div className="container">
        <h1>AI Music Generator</h1>
        <p>Upload an image and let the music flow 🎶</p>

        <input type="file" accept="image/*" onChange={handleFileChange} />
        <br /><br />
        <button onClick={handleGenerate} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Music'}
        </button>

        {musicUrl && (
          <div style={{ marginTop: '20px' }}>
            <h3>Generated Music:</h3>
            <audio controls src={musicUrl}></audio>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

