import React from 'react';

const SearchExercisesPlayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <p>Search for a video</p>
    );
  };

  return (
    <div>
      <iframe
        title={videoId}
        className="video-iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
      />
    </div>
  );
};

export default SearchExercisesPlayer;
