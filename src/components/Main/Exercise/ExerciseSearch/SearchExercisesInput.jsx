import React, { useState } from 'react';

const SearchExercises = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="video-search"
        onChange={handleChange}
        value={input}
        type="text"
        placeholder="Search exercise"
      />
      <button>SEARCH</button>
    </form>
  );
};

export default SearchExercises;
