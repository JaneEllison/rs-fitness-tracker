import React from 'react';

const SearchExercisesVideo = ({ data, onVideoSelected }) => {
  const selectVideo = (videoIdObj, onVideoSelected) => {
    onVideoSelected(videoIdObj.videoId);
  };

  const constructVideo = (videosData, onVideoSelected) => {
    return videosData.map(({ snippet, id }, index) => {
      return (
        <div key={index} onClick={() => selectVideo(id, onVideoSelected)}>
          <p> {snippet.title} </p>
        </div>
      );
    });
  };

  return <>{constructVideo(data, onVideoSelected)}</>;
};

export default SearchExercisesVideo;
