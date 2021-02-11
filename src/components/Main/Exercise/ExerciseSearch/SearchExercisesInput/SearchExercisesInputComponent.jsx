import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import style from '../ExerciseSearch.module.css';
import exerciseComponentConstants from '../../../../../constants/exerciseComponentConstants';

const {
  SEARCH_EXERCISES_INPUT_COMPONENT: {
    SEARCH_TYPE,
    SEARCH_PLACEHOLDER,
    SEARCH_ENTER_BUTTON,
  },
} = exerciseComponentConstants;

const SearchExercisesInput = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const { Search } = Input;

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmitKeyword = () => {
    if (input.trim() === '') return;

    onSearch(input);
  };

  return (
    <div className={style.input}>
      <Search
        type={SEARCH_TYPE}
        value={input}
        placeholder={SEARCH_PLACEHOLDER}
        onChange={handleChange}
        enterButton={SEARCH_ENTER_BUTTON}
        onSearch={handleSubmitKeyword}
      />
    </div>
  );
};

SearchExercisesInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchExercisesInput;
