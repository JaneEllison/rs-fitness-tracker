import React from 'react';
import SearchExercisesVideo from './SearchExercisesVideoComponent';

const SearchExercisesList = ({ data, onVideoSelected }) => {
  return (
    <div>
      <div className='asf'>
        <SearchExercisesVideo data={data} onVideoSelected={onVideoSelected} />
      </div>
    </div>
  );
};

export default SearchExercisesList;
