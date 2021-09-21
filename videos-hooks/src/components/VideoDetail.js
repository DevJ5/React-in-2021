import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail">
      <div>
        <iframe
          src={videoSrc}
          frameborder="0"
          className="video-detail__iframe"
          title="video-detail"></iframe>
      </div>
      <h4 className="video-detail__heading">{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
