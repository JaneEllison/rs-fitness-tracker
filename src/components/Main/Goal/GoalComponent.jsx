import React from 'react';
import { useSelector } from 'react-redux';
import {
  Row,
  Col,
  Spin,
} from 'antd';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import moment from 'moment';
import UserPhysicsComponent from './UserPhysics/UserPhysicsComponent';
import UserGoalComponent from './UserGoal/UserGoalComponent';
import profileSelector from '../../../store/Selectors/profileSelector';
import calculateTotalCaloriesForDay from '../../../utils/calculateTotalCaloriesForDay';
import getAgeFromDateString from '../../../utils/getAgeFromDateString';

function GoalComponent() {
  const profile = useSelector(profileSelector);

  if (!isLoaded(profile)) {
    return <Spin />;
  }

  if (isEmpty(profile)) {
    return <div>You have to sign up</div>;
  }

  if (isLoaded(profile) && !isEmpty(profile)) {
    const currentDate = moment(moment.now()).format('DD.MM.YYYY');
    const {
      userPhysics, userGoals, userMenus, userHistory,
    } = profile;
    const userGoalsSummary = {
      ...userPhysics,
      age: getAgeFromDateString(userPhysics.birthDay),
    };

    return (
      <Row gutter={16}>
        <Col span={24} md={12}>
          <UserPhysicsComponent
            summary={userPhysics}
            userHistory={userHistory}
            dailyCalories={calculateTotalCaloriesForDay(userMenus[currentDate])}
          />
        </Col>
        <Col span={24} md={12}>
          <UserGoalComponent
            summary={userGoalsSummary}
            userGoals={userGoals}
          />
        </Col>
      </Row>
    );
  }
}

export default GoalComponent;
