import React, { useState } from 'react';
import ExerciseControlComponent from './ExerciseSchedule/ExerciseControlComponent';
import { useSelector } from 'react-redux';
import ExerciseAddComponent from './ExerciseSchedule/ExerciseAddForm/ExerciseAddComponent';
import SearchExercisesComponent from './ExerciseSearch/SearchExercisesComponent';
import TimeComponent from './Time/TimeComponent';
import { Row, Col } from 'antd';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import style from './ExerciseComponent.module.css';
import daysList from '../../../constants/daysList';
import profileSelector from '../../../store/Selectors/profileSelector';

const ExerciseComponent = () => {

  const profile = useSelector(profileSelector);
  const [selectedDay, setSelectedDay] = useState(daysList[new Date(Date.now()).getDay()].name);
  const components = daysList.map((day) => {
    return (
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
    );
  });

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
          {
            !isEmpty(profile) && isLoaded(profile)
              ? <ExerciseAddComponent
                  selectedDay={selectedDay}
                  setSelectedDay={setSelectedDay}
                  profile={profile}
                />
              : <div>...Loading</div>
          }
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
