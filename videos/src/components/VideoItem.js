import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <li className="video-item" onClick={() => onVideoSelect(video)}>
      <div className="video-item__image-wrapper">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt=""
          className="video-item__image"
        />
      </div>
      <div className="video-item__title">{video.snippet.title}</div>
    </li>
  );
};

export default VideoItem;
