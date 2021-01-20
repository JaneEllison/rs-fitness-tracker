import React from 'react';
import ExerciseListComponent from './ExerciseListComponent';
import { useDispatch, useSelector } from 'react-redux';
import { exerciseAddAction } from '../../../../store/exerciseDataReducer/exerciseReducer/exerciseActionCreators';
import { selectDayAction } from '../../../../store/exerciseDataReducer/exerciseSelectDayReducer/selectedDayReducer';
import { Row, Col } from 'antd';

const List = () => {
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.selectedDayReducer);
  const days = useSelector((state) => state.exerciseReducer);
  const defaultDay = Object.keys(days)[0];

  if (selectedDay === null) {
    dispatch(selectDayAction(defaultDay));
  }

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
      <Col className="exercise-select">
        <h3>Select day: </h3>
        <h3>Exercise: </h3>
      </Col>
      {selectedDay !== null ? (
        <ExerciseListComponent
          selectedDay={selectedDay}
          onSubmit={globalAddExercise}
        />
      ) : null}
    </Row>
  );
};

export default List;
