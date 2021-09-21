import React, { useState, useEffect } from 'react';
import useVideos from './hooks/useVideos';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

const App = () => {
  const [videos, search] = useVideos('dogs');
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div>
      <SearchBar onTermSubmit={search} />
      <div className="main-content">
        <VideoDetail video={selectedVideo} />
        <VideoList
          videos={videos}
          onVideoSelect={(video) => setSelectedVideo(video)}
        />
      </div>
    </div>
  );
};

export default App;
