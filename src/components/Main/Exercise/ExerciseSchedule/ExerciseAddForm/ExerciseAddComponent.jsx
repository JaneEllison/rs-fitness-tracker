import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import ExerciseControlComponent from './ExerciseControlComponent';
import style from '../ExerciseSchedule.module.css';

const ExerciseAddComponent = ({ selectedDay, setSelectedDay }) => (
  <Row className={style.add_wrapper}>
    <Col className={style.select_title}>
      <h3>Select day: </h3>
      <h3>Exercise: </h3>
    </Col>
    {selectedDay !== null ? (
      <ExerciseControlComponent
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
    ) : null}
  </Row>
);

ExerciseAddComponent.propTypes = {
  selectedDay: PropTypes.string.isRequired,
  setSelectedDay: PropTypes.func.isRequired,
};

export default ExerciseAddComponent;
