import React from 'react';
import SearchExercisesVideo from './SearchExercisesVideo';

const SearchExercisesList = ({ data, onVideoSelected }) => {
  return (
    <div>
      <div>
        <SearchExercisesVideo data={data} onVideoSelected={onVideoSelected} />
      </div>
    </div>
  );
};

export default SearchExercisesList;
