import React from 'react';
import { Empty } from 'antd';

const SearchExercisesPlayer = ({ videoId }) => {
  if (!videoId) {
    return <Empty className="search-video_empty" />;
  }

  return (
    <div>
      <iframe
        style={{ width: 400, height: 230 }}
        title={videoId}
        className="video-iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
      />
    </div>
  );
};

export default SearchExercisesPlayer;
