import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';
import style from '../ExerciseSearch.module.css';

const SearchExercisesPlayer = ({ videoId }) => {
  if (!videoId) {
    return <Empty className={style.video_empty} />;
  }

  return (
    <iframe
      title={videoId}
      className={style.video_iframe}
      src={`https://www.youtube.com/embed/${videoId}`}
    />
  );
};

SearchExercisesPlayer.defaultProps = {
  videoId: null,
};

SearchExercisesPlayer.propTypes = {
  videoId: PropTypes.string,
};

export default SearchExercisesPlayer;
