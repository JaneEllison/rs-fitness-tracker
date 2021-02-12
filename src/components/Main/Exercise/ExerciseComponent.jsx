import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import ExerciseControlComponent from './ExerciseSchedule/ExerciseControlComponent';
import ExerciseFormComponent from './ExerciseSchedule/ExerciseAddForm/ExerciseFormComponent';
import SearchExercisesComponent from './ExerciseSearch/SearchExercisesComponent';
import TimeComponent from './Time/TimeComponent';
import style from './ExerciseComponent.module.css';
import exerciseComponentConstants from '../../../constants/exerciseComponentConstants';
import profileSelector from '../../../store/Selectors/profileSelector';
import getExercisesForDay from './ExerciseSearch/getExercisesForDay';

const {
  DAYS_LIST,
} = exerciseComponentConstants;

const ExerciseComponent = () => {
  const profile = useSelector(profileSelector);
  const [selectedDay, setSelectedDay] = useState(DAYS_LIST[new Date(Date.now()).getDay()].name);
  const [daysExercises, setDaysExercises] = useState(DAYS_LIST);

  useEffect(() => {
    setDaysExercises(getExercisesForDay(DAYS_LIST, profile.usersExercises));
  }, [profile.usersExercises]);

  const components = daysExercises.map((day) => (
    <ExerciseControlComponent
      selectedDay={selectedDay}
      key={day.id}
      day={day.name}
      setSelectedDay={setSelectedDay}
      exercises={day.exercises}
    />
  ));

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Exercise schedule</h1>
      <Row align="middle" justify="space-between" className={style.cards}>
        {
          !isEmpty(profile) && isLoaded(profile)
            ? components
            : <div>...Loading</div>
        }
      </Row>
      <Row className={style.main_content} justify="space-between">
        <Col className={style.left_content}>
          <ExerciseFormComponent
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            profile={profile}
          />
          <TimeComponent />
        </Col>
        <Col>
          <SearchExercisesComponent />
        </Col>
      </Row>
    </div>
  );
};

export default ExerciseComponent;
