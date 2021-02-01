import React from 'react';
import ExerciseControlComponent from './ExerciseControlComponent';
import { Row, Col } from 'antd';
import style from '../ExerciseSchedule.module.css';

const ExerciseAddComponent = ({selectedDay, setSelectedDay}) => {

  return (
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
};

export default ExerciseAddComponent;
