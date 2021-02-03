import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import ExerciseControlComponent from './ExerciseSchedule/ExerciseControlComponent';
import ExerciseAddComponent from './ExerciseSchedule/ExerciseAddForm/ExerciseAddComponent';
import SearchExercisesComponent from './ExerciseSearch/SearchExercisesComponent';
import TimeComponent from './Time/TimeComponent';
import style from './ExerciseComponent.module.css';
import daysList from '../../../constants/daysList';
import profileSelector from '../../../store/Selectors/profileSelector';
import getExercisesForDay from './ExerciseSearch/getExercisesForDay';

const ExerciseComponent = () => {
  const profile = useSelector(profileSelector);
  const [selectedDay, setSelectedDay] = useState(daysList[new Date(Date.now()).getDay()].name);
  const [daysExercises, setDaysExercises] = useState(daysList);

  useEffect(() => {
    setDaysExercises(getExercisesForDay(daysList, profile.usersExercises));
  }, [profile.usersExercises]);

  const components = daysExercises.map((day) => (
    // <Col  sm={{ span: 3, offset: 0}} lg={{ span: 5, offset: 0}} xl={{span: 3, offset: 0,}}>
    // <Col span={3}>
    <ExerciseControlComponent
      selectedDay={selectedDay}
      key={day.id}
      day={day.name}
      setSelectedDay={setSelectedDay}
      exercises={day.exercises}
    />
    // </Col>
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
          <ExerciseAddComponent
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
