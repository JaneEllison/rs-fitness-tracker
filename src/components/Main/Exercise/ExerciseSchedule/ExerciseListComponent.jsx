import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDayAction } from '../../../../store/exerciseDataReducer/exerciseSelectDayReducer/selectedDayReducer';
import { Row, Col, Select, Input } from 'antd';

const ExerciseAddComponent = (props) => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();
  const days = useSelector((state) => Object.keys(state.exerciseReducer));

  let currentSelectDay = props.selectedDay || days;

  const { Option } = Select;
  const { Search } = Input;

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      title: input,
      isComplete: false,
    });

    setInput('');
  };

  const currentDropdownDay = (value) => {
    dispatch(selectDayAction(value));
  };

  return (
    <div>
      <Select
        className="exercise-dropdown"
        value={currentSelectDay}
        onChange={currentDropdownDay}
      >
        {days.map((day, index) => (
          <Option value={day} key={index}>
            {day}
          </Option>
        ))}
      </Select>
      <Row onSubmit={handleSubmit}>
        <Col>
          <Search
            type="text"
            value={input}
            placeholder="Add exercise"
            name="text"
            onChange={handleChange}
            enterButton="ADD"
            onSearch={handleSubmit}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ExerciseAddComponent;
