import React, { useState } from 'react'

const ExerciseFormComponent = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  
  const handleChange = (event) => {
    setInput(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('');
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
          type="text"
          placeholder="Update your exercise"
          value={input}
          name="text"
          onChange={handleChange}
          />
          <button>Update</button>
        </>
      ) : (
        <>
          <input
          type="text"
          placeholder="Add exercises"
          value={input}
          name="text"
          onChange={handleChange}
          />
          <button>Add</button>
        </>    
      )}
    </form>
  );
}

export default ExerciseFormComponent;
