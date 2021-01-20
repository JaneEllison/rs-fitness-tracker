import React, { useState } from 'react';
import { Input } from 'antd';

const SearchExercises = (props) => {
  const [input, setInput] = useState('');

  const { Search } = Input;

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    props.onSearch(input);
  };

  return (
    <div className="search-input">
      <Search
        type="text"
        value={input}
        placeholder="Search exercise"
        onChange={handleChange}
        enterButton="SEARCH"
        onSearch={handleSubmit}
      />
    </div>
  );
};

export default SearchExercises;
