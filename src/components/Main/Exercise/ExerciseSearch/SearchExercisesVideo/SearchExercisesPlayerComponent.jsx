import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';
import style from '../ExerciseSearch.module.css';
import exerciseComponentConstants from '../../../../../constants/exerciseComponentConstants';

const {
  SEARCH_EXERCISES_PLAYER_COMPONENT: {
    GET_IFRAME_SRC,
  },
} = exerciseComponentConstants;

const SearchExercisesPlayer = ({ videoId }) => {
  if (!videoId) {
    return <Empty className={style.video_empty} />;
  }

  return (
    <iframe
      title={videoId}
      className={style.video_iframe}
      src={GET_IFRAME_SRC(videoId)}
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
