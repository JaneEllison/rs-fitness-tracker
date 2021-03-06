import { Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchDataYoutubeAPI, selectVideoAction } from '../../../../store/exerciseDataReducer/exerciseSearchReducer/exerciseSearchReducer';
import SearchExercisesInput from './SearchExercisesInput/SearchExercisesInputComponent';
import SearchExercisesList from './SearchExercisesVideo/SearchExercisesListComponent';
import SearchExercisesPlayer from './SearchExercisesVideo/SearchExercisesPlayerComponent';
import exerciseComponentConstants from '../../../../constants/exerciseComponentConstants';

const {
  SEARCH_EXERCISES_COMPONENT: {
    ROW_JUSTIFY,
  },
} = exerciseComponentConstants;

const SearchExercisesComponent = () => {
  const dispatch = useDispatch();
  const youtubeData = useSelector((state) => state.exerciseSearchReducer);

  const onVideoSelected = (videoId) => {
    dispatch(selectVideoAction(videoId));
  };

  const onSearch = (keyword) => {
    dispatch(getSearchDataYoutubeAPI(keyword));
  };

  return (
    <div>
      <SearchExercisesInput onSearch={onSearch} />
      <Row justify={ROW_JUSTIFY}>
        <SearchExercisesPlayer videoId={youtubeData.selectedVideoId} />
        <SearchExercisesList
          onVideoSelected={onVideoSelected}
          data={youtubeData.videoMetaInfo}
        />
      </Row>
    </div>
  );
};

export default SearchExercisesComponent;
