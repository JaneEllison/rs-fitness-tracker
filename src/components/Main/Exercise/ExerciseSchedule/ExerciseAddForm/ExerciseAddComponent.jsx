import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Select,
  Input,
} from 'antd';
import { useFirebase, isEmpty, isLoaded } from 'react-redux-firebase';
import style from '../ExerciseSchedule.module.css';
import profileSelector from '../../../../../store/Selectors/profileSelector';
import addExercise from '../ExerciseActions/addExercise';
import exerciseComponentConstants from '../../../../../constants/exerciseComponentConstants';

const { Option } = Select;
const { Search } = Input;

const {
  DAYS_LIST,
  EXERCISE_ADD_COMPONENT: {
    SEARCH_PLACEHOLDER,
    SEARCH_BUTTON_TEXT,
    SEARCH_TYPE,
    SEARCH_NAME,
  },
} = exerciseComponentConstants;

const ExerciseAddComponent = ({ selectedDay, setSelectedDay }) => {
  const firebase = useFirebase();
  const [input, setInput] = useState('');
  const profile = useSelector(profileSelector);

  const currentSelectDay = selectedDay || DAYS_LIST;

  const myRef = React.createRef();

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmitExercise = () => {
    if (input.trim() === '') {
      return;
    }

    addExercise({
      title: input.trim(),
      isComplete: false,
    }, currentSelectDay, firebase, profile);

    setInput('');
  };

  const currentDropdownDay = (value) => {
    setSelectedDay(value);
  };

  useEffect(() => {
    if (myRef.current) {
      myRef.current.focus();
    }
  }, [selectedDay, isEmpty(profile), isLoaded(profile)]);

  return (
    <div>
      <Select
        className={style.dropdown}
        value={currentSelectDay}
        onChange={currentDropdownDay}
      >
        {DAYS_LIST.map((day) => (
          <Option value={day.name} key={day.id}>
            {day.name}
          </Option>
        ))}
      </Select>
      <Row className={style.add_form_wrapper}>
        <Col className={style.add_form_content}>
          <Search
            ref={myRef}
            type={SEARCH_TYPE}
            value={input}
            placeholder={SEARCH_PLACEHOLDER}
            name={SEARCH_NAME}
            onChange={handleChange}
            enterButton={SEARCH_BUTTON_TEXT}
            onSearch={handleSubmitExercise}
          />
        </Col>
      </Row>
    </div>
  );
};

ExerciseAddComponent.propTypes = {
  selectedDay: PropTypes.string.isRequired,
  setSelectedDay: PropTypes.func.isRequired,
};

export default ExerciseAddComponent;
