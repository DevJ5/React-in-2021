import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  return (
    <ul className="video-list">
      {props.videos.map((video) => (
        <VideoItem
          video={video}
          key={video.id.videoId}
          onVideoSelect={props.onVideoSelect}
        />
      ))}
    </ul>
  );
};

export default VideoList;
