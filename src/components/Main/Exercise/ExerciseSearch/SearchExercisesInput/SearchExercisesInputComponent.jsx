import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import style from '../ExerciseSearch.module.css';

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
        type="text"
        value={input}
        placeholder="Search exercise"
        onChange={handleChange}
        enterButton="SEARCH"
        onSearch={handleSubmitKeyword}
      />
    </div>
  );
};

SearchExercisesInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchExercisesInput;
