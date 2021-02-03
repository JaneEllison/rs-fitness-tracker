import React from 'react';
import PropTypes from 'prop-types';
import SearchExercisesVideo from './SearchExercisesVideoComponent';

const SearchExercisesList = ({ data, onVideoSelected }) => (
  <div>
    <div>
      <SearchExercisesVideo data={data} onVideoSelected={onVideoSelected} />
    </div>
  </div>
);

SearchExercisesList.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  data: PropTypes.array.isRequired,
  onVideoSelected: PropTypes.func.isRequired,
};

export default SearchExercisesList;
