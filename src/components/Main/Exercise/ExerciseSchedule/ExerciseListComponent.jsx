import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDayAction } from '../../../../store/exerciseDataReducer/exerciseSelectDayReducer/selectedDayReducer';

const ExerciseAddComponent = (props) => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();
  const days = useSelector((state) => Object.keys(state.exerciseReducer));

  let currentSelectDay = props.selectedDay || days;

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      title: input,
      isComplete: false,
    });

    setInput('');
  };

  const currentDropdownDay = (e) => {
    dispatch(selectDayAction(e.target.value));
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Add exercise"
          name="text"
          onChange={handleChange}
        />
        <button>ADD</button>
      </form>
      <select value={currentSelectDay} onChange={currentDropdownDay}>
        {days.map((day, index) => (
          <option value={day} key={index}>
            {day}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExerciseAddComponent;
