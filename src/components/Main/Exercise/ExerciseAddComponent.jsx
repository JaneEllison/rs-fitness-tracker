import React, { useState } from 'react';

const ExerciseAddComponent = (props) => {
  const [input, setInput] = useState('');
  
  const handlerChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      title: input,
      isComplete: false
    })

    setInput('');
  };

  return (
    <div>
      <h1>Test</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Add exercise"
          name="text"
          onChange={handlerChange}
        />
        <button>ADD</button>
      </form>
    </div>
  );
}

// onSubmit={handleSubmit}

export default ExerciseAddComponent;
