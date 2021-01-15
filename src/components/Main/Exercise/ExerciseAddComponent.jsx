import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDayAction } from '../../../store/exerciseReducer/exerciseReducer';

const ExerciseAddComponent = (props) => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();
  const days = useSelector((state) => Object.keys(state.exerciseReducer));
  
  const handlerChange = (event) => {
    setInput(event.target.value)
  }
  console.log(props.selectedDay, 'globalday');
  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      title: input,
      isComplete: false
    })

    setInput('');
  };

  const currentDropdownDay = (e) => {
    dispatch(selectDayAction(e.target.value));
  }

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
      <select onChange={currentDropdownDay}>
        {days.map((day) => <option value={day} selected={props.selectedDay == day}>{day}</option>)}
      </select>
    </div>
  );
}

export default ExerciseAddComponent;
