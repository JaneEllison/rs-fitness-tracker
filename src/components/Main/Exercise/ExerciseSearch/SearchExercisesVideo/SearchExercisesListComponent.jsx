import React from 'react';
import SearchExercisesVideo from './SearchExercisesVideoComponent';

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
