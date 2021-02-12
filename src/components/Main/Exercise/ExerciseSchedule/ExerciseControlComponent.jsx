import React from 'react';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { Card, Col } from 'antd';
import ExerciseActionComponent from './ExerciseCards/ExerciseActionComponent';
import dispatchDeleteExercise from './ExerciseActions/dispatchDeleteExercise';
import profileSelector from '../../../../store/Selectors/profileSelector';
import dispatchCompleteExercise from './ExerciseActions/dispatchCompleteExercise';
import exerciseComponentConstants from '../../../../constants/exerciseComponentConstants';
import style from './ExerciseSchedule.module.css';
import './ExerciseAnt.css';

const {
  EXERCISE_CONTROL_COMPONENT: {
    CARD_SIZE,
  },
} = exerciseComponentConstants;

const ExerciseControlComponent = ({
  day,
  exercises,
  selectedDay,
  setSelectedDay,
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
        size={CARD_SIZE}
        title={day}
        hoverable
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

ExerciseControlComponent.defaultProps = {
  exercises: [],
};

ExerciseControlComponent.propTypes = {
  selectedDay: PropTypes.string.isRequired,
  setSelectedDay: PropTypes.func.isRequired,
  day: PropTypes.string.isRequired,
  exercises: PropTypes.arrayOf(PropTypes.object),
};

export default ExerciseControlComponent;
