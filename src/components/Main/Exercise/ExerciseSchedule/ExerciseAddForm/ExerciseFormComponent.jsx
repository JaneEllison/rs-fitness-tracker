import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import ExerciseAddComponent from './ExerciseAddComponent';
import style from '../ExerciseSchedule.module.css';
import exerciseComponentConstants from '../../../../../constants/exerciseComponentConstants';

const {
  EXERCISE_FORM_COMPONENT: {
    SELECT_DAY_HEADING,
    EXERCISE_HEADING,
  },
} = exerciseComponentConstants;

const ExerciseFormComponent = ({ selectedDay, setSelectedDay }) => (
  <Row className={style.add_wrapper}>
    <Col className={style.select_title}>
      <h3>{SELECT_DAY_HEADING}</h3>
      <h3>{EXERCISE_HEADING}</h3>
    </Col>
    {selectedDay !== null ? (
      <ExerciseAddComponent
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
    ) : null}
  </Row>
);

ExerciseFormComponent.propTypes = {
  selectedDay: PropTypes.string.isRequired,
  setSelectedDay: PropTypes.func.isRequired,
};

export default ExerciseFormComponent;
