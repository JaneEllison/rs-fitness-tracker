import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import ExerciseAddComponent from './ExerciseAddComponent';
import style from '../ExerciseSchedule.module.css';

const ExerciseFormComponent = ({ selectedDay, setSelectedDay }) => (
  <Row className={style.add_wrapper}>
    <Col className={style.select_title}>
      <h3>Select day: </h3>
      <h3>Exercise: </h3>
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
