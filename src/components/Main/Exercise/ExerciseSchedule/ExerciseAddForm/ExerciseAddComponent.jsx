import React, { useEffect } from 'react';
import ExerciseListComponent from './ExerciseControlComponent';
import { useDispatch, useSelector } from 'react-redux';
import { exerciseAddAction } from '../../../../../store/exerciseDataReducer/exerciseReducer/exerciseActionCreators';
import { selectDayAction } from '../../../../../store/exerciseDataReducer/exerciseSelectDayReducer/selectedDayReducer';
import { Row, Col } from 'antd';
import style from '../ExerciseSchedule.module.css';

const List = () => {
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.selectedDayReducer);
  const days = useSelector((state) => state.exerciseReducer);
  const defaultDay = Object.keys(days)[0];

  useEffect(() => {
    dispatch(selectDayAction(defaultDay))
  }, [dispatch, defaultDay]);

  const globalAddExercise = (exercise) => {
    dispatch(
      exerciseAddAction(
        exercise.id,
        exercise.title,
        exercise.isComplete,
        selectedDay
      )
    );
  };

  return (
    <Row className="exercise-add_wrapper">
      <Col className={style.select_title}>
        <h3>Select day: </h3>
        <h3>Exercise: </h3>
      </Col>
      {selectedDay !== null ? (
        <ExerciseListComponent
          selectedDay={selectedDay}
          globalSetExercise={globalAddExercise}
        />
      ) : null}
    </Row>
  );
};

export default List;
