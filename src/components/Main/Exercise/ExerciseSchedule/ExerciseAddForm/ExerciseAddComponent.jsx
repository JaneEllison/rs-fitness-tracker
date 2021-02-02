/* eslint-disable react/prop-types */
import React from 'react';
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

export default ExerciseAddComponent;
