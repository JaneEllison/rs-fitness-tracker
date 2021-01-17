import React from 'react';
import SearchExercisesVideo from './SearchExercisesVideo';

const SearchExercisesList = ({ data, onVideoSelected }) => {
  return (
    <div>
      <div>
        <h2>Video List</h2>
        <SearchExercisesVideo data={data} onVideoSelected={onVideoSelected} />
      </div>
    </div>
  );
};

export default SearchExercisesList;
