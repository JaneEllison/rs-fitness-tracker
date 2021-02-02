/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Col } from 'antd';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import ExerciseActionComponent from './ExerciseCards/ExerciseActionComponent';
import style from './ExerciseSchedule.module.css';
import dispatchDeleteExercise from './ExerciseActions/dispatchDeleteExercise';
import profileSelector from '../../../../store/Selectors/profileSelector';
import dispatchCompleteExercise from './ExerciseActions/dispatchCompleteExercise';

const ExerciseControlComponent = ({
  day, exercises, selectedDay, setSelectedDay,
}) => {
  const profile = useSelector(profileSelector);
  const firebase = useFirebase();

  const removeExercise = (id) => {
    dispatchDeleteExercise(id, day, firebase, profile);
  };

  const completeExercise = (id) => {
    dispatchCompleteExercise(id, day, firebase, profile);
  };

  const selectDay = () => {
    setSelectedDay(day);
  };

  return (
    <Col className={style.content_wrapper} onClick={() => selectDay()}>
      <Card
        className={
          day === selectedDay ? [style.content, style.selected] : style.content
        }
        size="small"
        title={day}
      >
        {
          exercises
            ? (
              <ExerciseActionComponent
                day={day}
                exercises={exercises}
                completeExercise={completeExercise}
                removeExercise={removeExercise}
              />
            )
            : <div />
        }

      </Card>
    </Col>
  );
};

export default ExerciseControlComponent;
