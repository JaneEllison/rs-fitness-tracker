import { Row } from 'antd';
import React, { useState } from 'react';
import youtubeApi from '../../../../api/makeQueryToSearchYoutube';
import SearchExercisesInput from './SearchExercisesInput';
import SearchExercisesList from './SearchExercisesList';
import SearchExercisesPlayer from './SearchExercisesPlayer';

const SearchExercisesComponent = () => {
  const [search, setSearch] = useState({
    videoMetaInfo: [],
    selectedVideoId: null,
  });

  const onVideoSelected = (videoId) => {
    setSearch({ ...search, selectedVideoId: videoId });
  };

  const onSearch = async (keyword) => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: keyword,
      },
    });

    setSearch({
      videoMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId,
    });
  };

  return (
    <div>
      <SearchExercisesInput onSearch={onSearch} />
      <Row justify="space-between">
        <SearchExercisesPlayer videoId={search.selectedVideoId} />
        <SearchExercisesList
          onVideoSelected={onVideoSelected}
          data={search.videoMetaInfo}
        />
      </Row>
    </div>
  );
};

export default SearchExercisesComponent;
